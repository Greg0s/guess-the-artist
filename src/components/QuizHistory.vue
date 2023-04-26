<template>
  <div>
    <h3>Last artist</h3>
    <div class="last-artist">
      <span id="name">{{ lastArtistName }}</span>
      <img id="last-artist-pic" alt="Artist picture" :src="imgSource"/>
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
    text-align: end;
    font-size:1rem;
  }
  .last-artist{
    display: flex;
    align-items: center;
    gap:1rem;
  }

</style>