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
//import ocr from './services/api/ocr.js'

export default {
  name: 'App',
  components: {
    QuizFilters,
    QuizCover,
    QuizAnswerField
  }, 
  async created() {
    this.play();
    //this.cover = "https://lastfm.freetls.fastly.net/i/u/300x300/9636b4b70d6a4aed99ba42859a9d3297.png";
  },
  data() {
    return { 
      cover     : "",
      mbid      : "",
      track     : "",
      artist    : "",
      artistPic : ""
    }
  },
  methods :{
    async getDataset(){
      // const data = await lastfm.getTopSongs();
      //let tracks = data.tracks.track;
      //return tracks;
      const data = await lastfm.getTopArtists();
      let artists = data.artists.artist;
      return artists;
    },
    getRandomSong(songList) {
      let rand = Math.floor(Math.random()*50);
      // console.log(currentSong);
      // let imgUrl = currentSong.track.track.album.image[3]["#text"]
      while(songList[rand].mbid == ""){//check if no mbid
        rand = Math.floor(Math.random()*50);
      }
      return songList[rand].mbid;
    },
    getRandomArtist(artistList){
      let rand = Math.floor(Math.random()*50);
      // console.log(currentSong);
      // let imgUrl = currentSong.track.track.album.image[3]["#text"]
      while(artistList[rand].mbid == ""){//check if no mbid
        rand = Math.floor(Math.random()*50);
      }
      return artistList[rand].mbid;
    },
    async getMbid(){
      let artistList = await this.getDataset();
      this.mbid = this.getRandomArtist(artistList);
    },
    async getArtistInfos(){
      this.artist = await lastfm.getArtist(this.mbid);
      console.log(this.artist);
      //this.cover = this.track.track.album.image[3]["#text"];
      //this.artistPic = this.track.track.artist.name;
    },
    async play(){
      await this.getMbid();
      this.getArtistInfos();
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