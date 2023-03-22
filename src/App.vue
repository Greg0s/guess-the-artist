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
    //this.cover = "https://lastfm.freetls.fastly.net/i/u/300x300/9636b4b70d6a4aed99ba42859a9d3297.png";
  },
  data() {
    return { 
      cover : "",
      song : "",
      mbid : "",
      track : ""
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
      let songList = await this.getDataset();
      this.song = this.getRandomSong(songList);
      this.play();
    },
    async getCover(){
      this.track = await lastfm.getCover(this.mbid);
      //console.log(this.track);
      this.cover = this.track.track.album.image[3]["#text"];
      console.log(this.cover);
    },
    play(){
      this.getSong();
      console.log(this.song);
      //QuizCover.setCover(song.image[3]);
      //console.log(this.song);
      //console.log(this.song.artist.name);

      this.mbid = this.song.mbid;
      //this.cover = this.song.image[1].text;
      this.artist = this.song.artist.name;
      this.getCover();
      //QuizAnswerField.setAnswer(song.artist.name)
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