<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <h1 class="title">GuessTheArtist</h1>
  <QuizFilters />
  <QuizCover :imgSource="cover"/>
  <QuizAnswerField />
  <div id="test"></div>
</template>

<script>
import QuizFilters from './components/QuizFilters.vue'
import QuizCover from './components/QuizCover.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'
import lastfm from './services/api/lastfm.js'

export default {
  name: 'App',
  components: {
    QuizFilters,
    QuizCover,
    QuizAnswerField
  }, 
  created() {
    this.play();
    //this.cover = "https://cdns-images.dzcdn.net/images/cover/0c424dbe627530cd06a6fd408baba3f3/500x500.jpg";
  },
  data() {
    return { 
      cover : ""
    }
  },
  methods :{
    async getDataset(){
      const data = await lastfm.getTopSongs();
      let tracks = data.tracks.track;
      return tracks;
    },
    getRandomSong(songList) {
      //let rand = floor(Math.random()*50);
      return songList[5];
    },
    async getSong(){
      let songList = await getDataset();
      let song = getRandomSong(songList);
      console.log(song);
      play(song);
    },
    play(song){
      QuizCover.setCover(song.image[3]);
      QuizAnswerField.setAnswer(song.artist.name)
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