<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <UIColorMode></UIColorMode>
  <h1 class="title">Guess The Artist</h1>
  <div id="main">
    <QuizFilters @checkedGenre="setGenreFilter" @checkedDecade="setDecadeFilter" />
      <div class="topBox">
        <QuizScore :gameScore="score" :total="attemptsNb" :gameSR="successRate" />
        <QuizHistory class="history" :lastArtistName="lastArtist" :imgSource="lastArtistPic"/>
      </div>
      <QuizCover :imgSource="artistPic"/>
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
    //await this.init();
    document.title = 'Guess The Artist';
    this.artistsHistory = "";
    await this.play();
  },
  data() {
    return { 
      artistId  : "",
      artist    : "",
      artistPic : "",
      artistName : "",
      artistGenres :"",
      artistDecades : "",
      score : 0,
      successRate : 0,
      attemptsNb : 0,
      genre:"all",
      decade: "all",
      artistsHistory: "",
      lastArtist : "",
      lastArtistPic : "",
      userTheme: "light-theme",
      playlist: ['0XXN2jKGfxhnAxzosyjJbd','1ISSOeZLHpzuOJ0CdSYwgD', '37i9dQZF1DWTIfBdh7WtFL'],
      playlistNb: 0,
      database : ""
    }
  },
  methods :{
    async getDataset(){
      console.log(this.playlist[this.playlistNb]);
      const data = await spotify.getSongs(this.playlist[this.playlistNb]);
      //console.log(data);
      return data.items;  
    },
    async createDatabase(){
      let list = await this.getDataset();
      console.log(list);
      let database = [];
      let id, name, genre, period, img, artist, artistInfos;
      for(let i = 0 ; i < 50 ; i ++){
        id = list[i].track.artists[0].id;
        artistInfos = await this.getArtistInfos(id);

        name = list[i].track.artists[0].name;
        genre = artistInfos[0];
        period = await this.getArtistDecades(id);
        img = artistInfos[1];
        artist = [id, name, genre, period, img];
        database.push(artist);
      }
      this.database = JSON.stringify(Object.assign({}, database))
    },
    async getArtistDecades(artistId){
      let topSongs = await spotify.getTopSongsArtist(artistId);
      let artistDecades ="";
      // let d_1980 = new Date("1980-01-01");
      // let d_1990 = new Date("1990-01-01");
      let d_2000 = new Date("2000-01-01");
      // let d_2010 = new Date("2010-01-01");
      // let d_2020 = new Date("2020-01-01");
      let date;
      topSongs.tracks.forEach(track => {
       // console.log(track.album.release_date);
        date = new Date(track.album.release_date);

        // if(date < d_1980) { artistDecades += "beighteens " } else
        // if(date < d_1990) { artistDecades += "eighteens " } else
        // if(date < d_2000) { artistDecades += "nineties " } else
        // if(date < d_2010) { artistDecades += "twentyhundreds " } else
        // if(date < d_2020) { artistDecades += "twentytens " }
        // else { artistDecades += "2020 " }

        if(date < d_2000) { artistDecades += "old ";
        //console.log(date); 
      } 
        else { artistDecades += "recent " }
      })
      return artistDecades;
    },
    getRandomInList(list) {
      let rand = Math.floor(Math.random()*50);
      //console.log(list);
      return list[rand];
    },
    async getInListFilters(list, genre, decade){
      this.artistDecades="";
      console.log(this.artistDecades);
      let track = this.getRandomInList(list).track;
      //console.log(track);
      let artist = await this.getArtistFromId(track.artists[0].id);
      console.log(artist);
      //let genres =['pop','rock','edm','rap']
      if(genre != "all"){
        if(!artist.genres.join().toLowerCase().includes(genre)){
          return "exit";
        }
      }
      if(decade != "all"){
        await this.getArtistDecades(track.artists[0].id);
        console.log(this.artistDecades);
        if(!this.artistDecades.includes(decade)){
          return "exit";
        }
      }
      if(this.artistsHistory.includes(track.artists[0].id)){
        console.log('artiste deja passé');
        return "exit";
      }else{
        this.artistsHistory += track.artists[0].id + " ";
        console.log(this.artistsHistory);
        return track.artists[0].id;
      }

    },
    async getArtistId(){
      await this.getTracksList();
      let cpt = 0;
      do{
        this.artistId = await this.getInListFilters(this.tracksList, this.genre, this.decade);
        cpt++;
        console.log(cpt);
      }while(this.artistId == "exit" && cpt < 50);
      if(cpt == 50){
        cpt = 0;
        if(this.playlistNb < this.playlist.length - 1){
          this.playlistNb ++;
          console.log("playlistNb update" + this.playlistNb);
          this.next();
        }
        else{
          alert('No more artists to guess');
          this.artistsHistory = "";
          this.playlistNb = 0;
        }
      }
      //this.artistId = this.getRandomInList(this.tracksList).track.artists[0].id;
    },
    async getTracksList(){
      this.tracksList = await this.getDataset();
    },
    async getArtistInfos(id){
        let artistInfos = [];
        let artist = await spotify.getArtist(id);
        if(artist.genres){
          artistInfos.push(artist.genres.join());
        }else{
          artistInfos.push("");
        }
        artistInfos.push(artist.images[0].url);

        return artistInfos;
    },
    async getArtistFromId(id){
      return this.artist = await spotify.getArtist(id);
    },
    checkAnswer(payload){
      //console.log(this.artistName);
      this.attemptsNb ++;
      let userAnswer = payload.message.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if(this.artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() == userAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()){
        this.setLastArtist();
        this.next();
        this.score ++;
      }
      this.updateSR();
    },
    skipArtist(){
      this.attemptsNb ++;
      this.setLastArtist();
      this.next();
      this.updateSR();
    },
    updateSR(){
      if(this.attemptsNb > 0){
        this.successRate = Math.floor(this.score*100/this.attemptsNb);
      }
    },
    setGenreFilter(payload){
      this.genre = payload.message;

      this.next();
      //console.log(this.genre);
    },
    setDecadeFilter(payload){
      this.decade = payload.message;
      this.removeLastHistory();
      this.next();
      //console.log(this.decade);
    },
    setLastArtist(){
      this.lastArtist = this.artistName;
      this.lastArtistPic = this.artistPic;
    },
    removeLastHistory(){
      if(this.artistsHistory.length > 0){
        this.artistsHistory = this.artistsHistory.slice(-1,-21);
        // let cpt=this.artistsHistory.length - 1;
        //           this.artistsHistory = this.artistsHistory.slice(0,-21);
        // console.log('laaa: ', this.artistsHistory[cpt]);
        // console.log('cpt: ', cpt);
        // while(this.artistsHistory[cpt] != "/" && cpt > -1){
        //   console.log('yooooooo');

        //   console.log(this.artistsHistory);
        //   cpt--;
        // }
      }
    },
    async next(){
      await this.createDatabase();
      console.log(this.database);
      //await this.getArtistId();
      //await this.getArtistInfos();
    },
    async play(){
      this.artistsHistory = "";
      await this.next();
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