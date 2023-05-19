<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <UIColorMode></UIColorMode>
  <h1 class="title">Guess The Artist</h1>
  <div id="main">
    <QuizFilters @checkedGenre="setGenreFilter" @checkedPeriod="setPeriodFilter" />
      <div class="topBox">
        <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="successRate" />
        <QuizHistory class="history" :lastArtistName="lastArtist" :imgSource="lastArtistImg"/>
      </div>
      <QuizCover :imgSource="artistImg"/>
    <QuizAnswerField @attempt="checkAnswer" @skip="skipArtist" />
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
    this.database = await spotify.createDatabase();
    this.database = JSON.parse(this.database);
    this.currentDatabase = this.database;
    console.log(this.database);
    this.play();
  },
  data() {
    return { 
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
    checkAnswer(payload){
      this.attemptsNb ++;
      let userAnswer = payload.message.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if(this.artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() == userAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()){
        this.setLastArtist();
        this.next();
        this.score ++;
      }
      this.updateSR();
    },
    // Skip button
    skipArtist(){
      this.attemptsNb ++;
      this.setLastArtist();
      this.next();
      this.updateSR();
    },
    // Score rate
    updateSR(){
      if(this.attemptsNb > 0){
        this.successRate = Math.floor(this.score*100/this.attemptsNb);
      }
    },
    // Filters
    setGenreFilter(payload){
      // set new genre
      this.genre = payload.message;
      if(this.genre != 'all'){
        // update current database according to the filter
        let newDatabase = [];
        this.cpt = 0;
        this.database.forEach(artist => {
          if(artist.genres.includes(this.genre)){
            newDatabase.push(artist);
          }
        });
        this.currentDatabase = newDatabase;
      }else{ // remove filter
        this.initCurrentDatabase();
      }
      // change artist to match the filter
      this.next();
    },
    setPeriodFilter(payload){
      this.period = payload.message;
      if(this.period != 'all'){
        // update current database according to the filter
        let newDatabase = [];
        this.cpt = 0;
        this.database.forEach(artist => {
          if(artist.period.includes(this.period)){
            newDatabase.push(artist);
          }
        });
        this.currentDatabase = newDatabase;
        // change artist to match the filter
      }else{ // remove filter
        this.initCurrentDatabase();
      }
      this.next();
    },
    // Last artist
    setLastArtist(){
      this.lastArtist = this.artistName;
      this.lastArtistImg = this.artistImg;
    },
    initCurrentDatabase(){
      this.currentDatabase = this.database;
      this.cpt = 0;
    },
    cleanCurrentDb(){
      this.currentDatabase = this.currentDatabase.filter(function (artist) {
        return artist != null;
      });
    },
    // Game
    setArtistInfos(){
      this.artistId = this.currentDatabase[this.cpt]["id"];
      this.artistName = this.currentDatabase[this.cpt]["name"];
      console.log(this.artistName);
      this.artistPeriod = this.currentDatabase[this.cpt]["period"];
      this.artistGenres = this.currentDatabase[this.cpt]["genres"];
      console.log(this.artistGenres);
      this.artistImg = this.currentDatabase[this.cpt]["img"];
    },
    next(){
      delete this.currentDatabase[this.cpt];
      this.cleanCurrentDb();
      this.cpt++;
      this.setArtistInfos();
    },
    play(){
      this.setArtistInfos();
    }
  }
}

</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-primary-color);
  margin-top: 1rem;
}
body{
  /* font-family: 'Inter', sans-serif; */
  font-family: 'Judson', serif;
}
h1{
  font-family: 'Judson', serif;
}
.topBox{
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
}
:root{
  background-color: var(--background-color-primary);
}
#main{
  display: block;
  margin: auto;
  width: 30vw;
}
@media screen and (max-width: 800px) {
  #main{
    width: 75vw;
  }
}
</style>