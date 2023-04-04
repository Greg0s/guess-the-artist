<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <h1 class="title">GuessTheArtist</h1>
  <QuizFilters @checkedGenre="setGenreFilter" />
  <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="successRate" />
  <QuizCover :imgSource="artistPic"/>
  <QuizAnswerField @attempt="checkAnswer" @skip="skipArtist" />
</template>

<script>
import QuizFilters from './components/QuizFilters.vue'
import QuizCover from './components/QuizCover.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'
import QuizScore from './components/QuizScore.vue'
import spotify from './services/api/spotify.js'

export default {
  name: 'App',
  components: {
    QuizFilters,
    QuizCover,
    QuizAnswerField,
    QuizScore
  }, 
  async created() {
    //await this.init();
    await this.play();
  },
  data() {
    return { 
      artistId  : "",
      artist    : "",
      artistPic : "",
      artistName : "",
      artistGenres :"",
      score : 0,
      successRate : 0,
      attemptsNb : 0,
      tracksList : "",
      genre:'all'
    }
  },
  methods :{
    async getDataset(){
      const data = await spotify.getSongs();
      //console.log(data);
      return data.items;
    },
    async getArtistDecades(artistId){
      let topSongs = await spotify.getTopSongsArtist(artistId);
      let artistDecades ="";
      let d_1980 = "1980-01-01";
      let d_1990 = "1990-01-01";
      let d_2000 = "2000-01-01";
      let d_2010 = "2010-01-01";
      let d_2020 = "2020-01-01";
      let date;
      topSongs.tracks.forEach(track => {
        date = track.album.release_date;
        if(date < d_1980) { artistDecades += "b1980 " } else
        if(date < d_1990) { artistDecades += "1980 " } else
        if(date < d_2000) { artistDecades += "1990 " } else
        if(date < d_2010) { artistDecades += "2000 " } else
        if(date < d_2020) { artistDecades += "2010 " }
        else { artistDecades += "2020" }
      })
      return artistDecades;
    },
    getRandomInList(list) {
      let rand = Math.floor(Math.random()*50);
      //console.log(list);
      return list[rand];
    },
    async getInListFilters(list, genre){
      let track = this.getRandomInList(list).track;
      //console.log(track);
      let artist = await this.getArtistFromId(track.artists[0].id);
      //console.log(artist);
      //let genres =['pop','rock','edm','rap']
      if(genre != "all"){
          if(!artist.genres.join().toLowerCase().includes(genre)){
            return "exit";
        }
      }
      return track.artists[0].id;
    },
    async getArtistId(){
      await this.getTracksList();
      
      do{
        this.artistId = await this.getInListFilters(this.tracksList, this.genre);
      }while(this.artistId == "exit");
      //this.artistId = this.getRandomInList(this.tracksList).track.artists[0].id;
    },
    async getTracksList(){
      this.tracksList = await this.getDataset();
    },
    async getArtistInfos(){
        this.artist = await spotify.getArtist(this.artistId);
        ////console.log(this.artist);
        this.artistPic = this.artist.images[0].url;
        this.artistName = this.artist.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        console.log(this.artist);
        this.artistGenres = this.artist.genres.join();
    },
    async getArtistFromId(id){
      return this.artist = await spotify.getArtist(id);
    },
    checkAnswer(payload){
      //console.log(this.artistName);
      this.attemptsNb ++;
      let userAnswer = payload.message.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if(this.artistName.toLowerCase() == userAnswer){
        this.play();
        this.score ++;
      }
      this.updateSR();
    },
    skipArtist(){
      this.attemptsNb ++;
      this.play();
      this.updateSR();
    },
    updateSR(){
      if(this.attemptsNb > 0){
        this.successRate = Math.floor(this.score*100/this.attemptsNb);
      }
    },
    setGenreFilter(payload){
      this.genre = payload.message;
      console.log(this.genre);
    },
    async play(){
      await this.getArtistId();
      //console.log(this.artistId);
      await this.getArtistInfos();
      console.log(this.artistGenres);
      console.log(this.artistName);

      }
  }
}

</script>

<style>

#app {
  font-family: 'Inter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  font-family: 'Inter', sans-serif;
}
h1{
  font-family: 'Judson', serif;
}

</style>