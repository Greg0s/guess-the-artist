<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <h1 class="title">GuessTheArtist</h1>
  <QuizFilters />
  <QuizCover :imgSource="artistPic"/>
  <QuizAnswerField @attempt="checkAnswer" />
  <div id="test"></div>
</template>

<script>
import QuizFilters from './components/QuizFilters.vue'
import QuizCover from './components/QuizCover.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'
import spotify from './services/api/spotify.js'

export default {
  name: 'App',
  components: {
    QuizFilters,
    QuizCover,
    QuizAnswerField
  }, 
  async created() {
    await this.play();
  },
  data() {
    return { 
      artistId  : "",
      artist    : "",
      artistPic : "",
      artistName : ""
    }
  },
  methods :{
    async getDataset(){
      const data = await spotify.getSongs();
      //console.log(data);
      return data.items;
    },
    getRandomSong(songList) {
      let rand = Math.floor(Math.random()*50);
      return songList[rand];
    },
    async getArtistId(){
      let songList = await this.getDataset();
      this.artistId = this.getRandomSong(songList).track.artists[0].id;
    },
    async getArtistInfos(){
        this.artist = await spotify.getArtist(this.artistId);
        //console.log(this.artist);
        this.artistPic = this.artist.images[0].url;
        this.artistName = this.artist.name;
      },
    async play(){
      await this.getArtistId();
      //console.log(this.artistId);
      await this.getArtistInfos();
    },
    checkAnswer(payload){
      console.log(this.artistName);
      if(this.artistName.toLowerCase() == payload.message.toLowerCase()){
        this.play();
      }
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