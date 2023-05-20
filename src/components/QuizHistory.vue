<template>
  <div class="last-artist">
    <h3>Last artist</h3>
    <div class="last-artist-infos">
      <div id="last-artist-pic">
        <img  alt="Artist picture" :src="imgSource"/>
      </div>
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
    },
    watch: {
      imgSource: function(){
        if(this.imgSource == ""){
        document.querySelector('#last-artist-pic').style.visibility = 'hidden';
        }else{
          document.querySelector('#last-artist-pic').style.visibility = 'visible';
        }
      }
    },
    mounted(){
      if(this.imgSource == ""){
        document.querySelector('#last-artist-pic').style.visibility = 'hidden';
      }
    }
  }
</script>

<style>
  #last-artist-pic{
    width: 50px;
    height : 50px;
    border-radius: 8px;
    overflow: hidden;
  }
  #last-artist-pic img{
    border-radius: 8px;
  }
  h3{
    text-align: start;
    font-size:1.2rem;
  }
  .last-artist-infos{
    display: flex;
    align-items: center;
    gap:1rem;
  }
  .last-artist{
    border-radius: 25px;
    padding: 1rem;
    background-color: var(--accent-color);
  }
  .last-artist h3{
    margin: 0 0 1rem 0;
  }
  #name{
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1000px) {
    .last-artist{
      width: 55%;
    }
  }

</style>