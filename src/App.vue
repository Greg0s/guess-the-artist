<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <UIColorMode></UIColorMode>

  <!--~~~~~~~~~~~~~~~~~~Desktop >= 1000px~~~~~~~~~~~~~~~~~~~~-->
  <QuizHeader/>
  <div v-if="windowWidth > 1000" class="main">
    <div class="cover-box">
      <QuizImg :imgSource="artistImg"/>
    </div>
    <div class="side-box">
      <QuizFilters @checkedGenre="getGenreFilter" @checkedPeriod="getPeriodFilter" />
      <QuizReset @reset="resetScore"/>
      <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="correctRate" />
      <QuizHistory class="history" :lastArtistName="lastArtist" :imgSource="lastArtistImg"/>
      <QuizAnswerField @attempt="checkAnswer" @skip="skipArtist" />
    </div>
  </div>
  <!--~~~~~~~~~~~~~~~~~~Mobile < 1000px~~~~~~~~~~~~~~~~~~~~-->
  <div v-else class="main">
    <QuizFilters @checkedGenre="getGenreFilter" @checkedPeriod="getPeriodFilter" />
    <QuizReset @reset="resetScore"/>
    <div class="game-container">
      <div class="top-box">
        <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="correctRate" />
        <QuizHistory class="history" :lastArtistName="lastArtist" :imgSource="lastArtistImg"/>
      </div>
      <div class="cover-box">
        <QuizImg :imgSource="artistImg"/>
        <QuizAnswerField @attempt="checkAnswer" @skip="skipArtist" />
      </div>
    </div>
  </div>
  <QuizFooter/>
</template>

<script>
import QuizHeader from './components/QuizHeader.vue'
import QuizFooter from './components/QuizFooter.vue'
import QuizFilters from './components/QuizFilters.vue'
import QuizImg from './components/QuizImg.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'
import QuizScore from './components/QuizScore.vue'
import QuizHistory from './components/QuizHistory.vue'
import QuizReset from './components/QuizReset.vue'
import UIColorMode from './components/UIColorMode.vue'
import spotify from './services/api/spotify.js'

export default {
  name: 'App',
  components: {
    QuizHeader,
    QuizFooter,
    QuizFilters,
    QuizImg,
    QuizAnswerField,
    QuizScore, 
    QuizHistory,
    QuizReset,
    UIColorMode
  }, 
  async created() {
    document.title = 'Guess The Artist';
    this.getScoreUser();
    await this.createDatabase();
    this.play();
  },
  data() {
    return { 
      windowWidth: window.innerWidth,
      artistId : "",
      artistName : "",
      artistPeriod : "",
      artistGenres :"",
      artistImg : "",

      score : 0,
      correctRate : 0,
      attemptsNb : 0,

      genre:"all",
      period: "all",

      lastArtist : "",
      lastArtistImg : "",

      userTheme: "light-theme",

      database : "",
      currentDatabase : "",
    }
  },
  methods :{
    // For responsive v-if
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    },
    // Check user answer
    async checkAnswer(payload){
      this.addAttempt();
      let userAnswer = payload.message.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if(this.artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() == userAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()){
        this.setLastArtist();
        await this.next();
        this.addScore();
      }
      this.updateCR();
    },
    // Score
    addScore(){
      this.score ++;
      localStorage.setItem("user-score", this.score);
    },
    addAttempt(){
      this.attemptsNb ++;
      localStorage.setItem("user-attempts", this.attemptsNb);
    },
    getScoreUser() {
      if(localStorage.getItem("user-attempts", this.attemptsNb)){
        this.score = parseInt(localStorage.getItem("user-score"));
        this.attemptsNb = parseInt(localStorage.getItem("user-attempts", this.attemptsNb));
        this.correctRate = parseInt(localStorage.getItem("user-cr", this.attemptsNb));
      }
    },
    resetScore(){
      this.score = 0;
      this.attemptsNb = 0;
      this.correctRate = 0;
    },
    // Correct rate
    updateCR(){
      if(this.attemptsNb > 0){
        this.correctRate = Math.floor(this.score*100/this.attemptsNb);
        localStorage.setItem("user-cr", this.correctRate);
      }
    },
    // Skip button
    async skipArtist(){
      this.addAttempt();
      this.setLastArtist();
      await this.next();
      this.updateCR();
    },
    // Filters
    async getGenreFilter(payload){
      // set new genre
      this.genre = payload.message;
      await this.setFilter();
    },
    async getPeriodFilter(payload){
      //set new period
      this.period = payload.message;
      await this.setFilter();
    },
    async setFilter(){
      this.currentDatabase = this.merged(this.dbGenreFilter(), this.dbPeriodFilter());
      await this.next();
    },
    dbPeriodFilter(){
      if(this.period != 'all'){
        // filter database according to the filter
        let newDatabase = [];
        this.database.forEach(artist => {
          if(artist.period.includes(this.period)){
            newDatabase.push(artist);
          }
        });
        return newDatabase;
      }else{ // remove filter
        return this.database;
      }
    },
    dbGenreFilter(){
      if(this.genre != 'all'){
        // filter database according to the filter
        let newDatabase = [];
        this.database.forEach(artist => {
          if(artist.genres.includes(this.genre)){
            newDatabase.push(artist);
          }
        });
        return newDatabase;
      }else{ // remove filter
        return this.database;
      }
    },
    merged(db1, db2){
      let merged = [];
      db1.forEach(artist => {
        if(this.dbIncludes(db2, artist)){
          merged.push(artist);
        }
      });
      if(merged.length != 0){
        return merged;
      }else{// if merge empty
        if(this.genre != 'all'){
          document.getElementById(this.genre).checked = false;
          this.genre = 'all';
          document.getElementById("all-genre").checked = true;
        }
        if(this.period != 'all'){
          document.getElementById(this.period).checked = false;
          this.period = 'all';
          document.getElementById("all-period").checked = true;
        }
        return this.database;
      }
    },
    dbIncludes(db, artist){
      let includes = false;
      db.forEach(db_artist => {
        if(db_artist['name'].toString() === artist['name'].toString()){
          includes = true;
        }
      });
      return includes;
    },
    // Last artist
    setLastArtist(){
      this.lastArtist = this.artistName;
      this.lastArtistImg = this.artistImg;
    },
    // Database management
    async createDatabase(){
      this.database = await spotify.createDatabase();
      this.database = JSON.parse(this.database);
      this.currentDatabase = this.database;
    },
    cleanCurrentDb(){
      //clear null elements
      this.currentDatabase = this.currentDatabase.filter(function (artist) {
        return artist != null;
      });
    },
    // Game
    setArtistInfos(){
      this.artistId = this.currentDatabase[0]["id"];
      this.artistName = this.currentDatabase[0]["name"];
      this.artistPeriod = this.currentDatabase[0]["period"];
      this.artistGenres = this.currentDatabase[0]["genres"];
      this.artistImg = this.currentDatabase[0]["img"];
    },
    async next(){
      delete this.currentDatabase[0];
      this.cleanCurrentDb();
      if(this.currentDatabase.length == 0){
        await this.createDatabase();
        await this.setFilter();
      }
      this.setArtistInfos();
    },
    play(){
      this.setArtistInfos();
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
}

</script>

<style>

/*~~~~~~~~~~~~~~~~General~~~~~~~~~~~~~~~~*/

:root{
  background-color: var(--background-color-primary);
  transition: all ease 0.5s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-primary-color);
  font-family: 'Judson', serif;
  /* font-family: 'Inter', sans-serif; */
}

body{
  padding: 0;
  margin: 0;
}

/*~~~~~~~~~~~~~~~~Responsive~~~~~~~~~~~~~~~~*/

@media screen and (min-width: 1001px) {
  .main{
    display: flex;
    gap: 3rem;
  }
  .cover-box{
    display: block;
    max-width: 50vw;
    min-width: 40vw;
    overflow: hidden;
    border-radius: 25px;
    padding-left: 3rem;
  }
  .side-box{
    display: flex;
    width: 30vw;
    max-width: 250px;
    flex-direction: column;
    text-align: left;
    gap: 1rem;
  }
}

@media screen and (max-width: 1000px) {
  .main{
    width: 75vw;
    max-width: 500px;
    display: block;
    margin: auto;
  }
  .top-box{
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
  }
  .game-container{
    display: flex;
    flex-direction: column;
  }
}

</style>