<template>
  <div>
    <h3>Last artist:</h3>
    <div class="last-artist">
      <img id="last-artist-pic" alt="Artist picture" :src="imgSource"/>
      <span id="name">{{ lastArtistName }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuizHistory', 
    props: {
      lastArtistName : String,
      imgSource : String
    }
  }
</script>

<style>
  #last-artist-pic{
    width: 50px;
    height : 50px;
    border-radius: 15px;
  }
  h3{
    text-align: start;
    font-size:1rem;
  }
  .last-artist{
    display: flex;
    align-items: center;
    gap:1rem;
  }

</style>