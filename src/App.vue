<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <UIColorMode></UIColorMode>

  <!--~~~~~~~~~~~~~~~~~~Desktop >= 800px~~~~~~~~~~~~~~~~~~~~-->
  <div v-if="windowWidth > 1000" class="main">
    <div class="coverBox">
      <QuizCover :imgSource="artistImg"/>
    </div>
    <div class="sideBox">
      <h1 class="title">Guess The Artist</h1>
      <QuizFilters @checkedGenre="getGenreFilter" @checkedPeriod="getPeriodFilter" />
      <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="successRate" />
      <QuizHistory class="history" :lastArtistName="lastArtist" :imgSource="lastArtistImg"/>
      <QuizAnswerField @attempt="checkAnswer" @skip="skipArtist" />
    </div>
  </div>
  <!--~~~~~~~~~~~~~~~~~~Mobile < 800px~~~~~~~~~~~~~~~~~~~~-->
  <div v-else class="main">
    <h1 class="title">Guess The Artist</h1>
    <QuizFilters @checkedGenre="getGenreFilter" @checkedPeriod="getPeriodFilter" />
    <div class="gameContainer">
      <div class="topBox">
        <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="successRate" />
        <QuizHistory class="history" :lastArtistName="lastArtist" :imgSource="lastArtistImg"/>
      </div>
      <div class="coverBox">
        <QuizCover :imgSource="artistImg"/>
        <QuizAnswerField @attempt="checkAnswer" @skip="skipArtist" />
      </div>
    </div>
  </div>

</template>

<script>
import QuizFilters from './components/QuizFilters.vue'
import QuizCover from './components/QuizCover.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'
import QuizScore from './components/QuizScore.vue'
import QuizHistory from './components/QuizHistory.vue'
import UIColorMode from './components/UIColorMode.vue'
import spotify from './services/api/spotify.js'

export default {
  name: 'App',
  components: {
    QuizFilters,
    QuizCover,
    QuizAnswerField,
    QuizScore, 
    QuizHistory,
    UIColorMode
  }, 
  async created() {
    document.title = 'Guess The Artist';
    await this.createDatabase();
    console.log(this.database);
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
      successRate : 0,
      attemptsNb : 0,

      genre:"all",
      period: "all",

      lastArtist : "",
      lastArtistImg : "",

      userTheme: "light-theme",

      database : "",
      currentDatabase : "",
      cpt: 0
    }
  },
  methods :{
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    },
    //for debugging
    printDb(){
      let text = "currentdb = ";
      let cpt = 0;
      this.currentDatabase.forEach(artist => {
        text += artist['name'];
        cpt++;
      });
      console.log(text);
      console.log("cpt = ", cpt);
    },
    // Check user answer
    async checkAnswer(payload){
      this.attemptsNb ++;
      let userAnswer = payload.message.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if(this.artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() == userAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()){
        this.setLastArtist();
        await this.next();
        this.score ++;
      }
      this.updateSR();
    },
    // Skip button
    async skipArtist(){
      this.attemptsNb ++;
      this.setLastArtist();
      await this.next();
      this.updateSR();
    },
    // Score rate
    updateSR(){
      if(this.attemptsNb > 0){
        this.successRate = Math.floor(this.score*100/this.attemptsNb);
      }
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
      //let merged = {...db1, ...db2};
      let merged = [];
      db1.forEach(artist => {
        if(this.dbIncludes(db2, artist)){
          merged.push(artist);
        }
      });
      if(merged.length != 0){
        return merged;
      }else{// if merge empty
        // TO-DO: set filters to all here
        document.getElementById(this.genre).checked = false;
        document.getElementById(this.period).checked = false;
        this.genre = 'all';
        this.period = 'all';
        document.getElementById("all-genre").checked = true;
        document.getElementById("all-period").checked = true;
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
    initCurrentDatabase(){
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
      console.log(this.artistName);
      this.artistPeriod = this.currentDatabase[0]["period"];
      this.artistGenres = this.currentDatabase[0]["genres"];
      console.log(this.artistGenres);
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
      this.printDb();
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

/*~~~~~~~~~~~~~~~~GENERAL~~~~~~~~~~~~~~~~*/

:root{
  background-color: var(--background-color-primary);
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

h1{
  font-family: 'Judson', serif;
}

#main{
  display: block;
  margin: auto;
}

@media screen and (min-width: 1001px) {
  .main{
    display: flex;
    gap: 3rem;
  }
  .coverBox{
    display: block;
    width: 50vw;
    height: 100vh;
    overflow: hidden;
    border-radius: 25px;
  }
  .sideBox{
    display: flex;
    width: 30vw;
    max-width: 250px;
    flex-direction: column;
    height: 100vh;
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
  .topBox{
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
  }
  .gameContainer{
    display: flex;
    flex-direction: column;
  }
}

</style>