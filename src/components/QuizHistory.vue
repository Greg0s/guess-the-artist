<template>
  <div class="last-artist-box">
    <h3>Last artist</h3>
    <div class="last-artist-infos">
      <div id="last-artist-img">
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
        document.querySelector('#last-artist-img').style.visibility = 'hidden';
        }else{
          document.querySelector('#last-artist-img').style.visibility = 'visible';
        }
      }
    },
    mounted(){
      if(this.imgSource == ""){
        document.querySelector('#last-artist-img').style.visibility = 'hidden';
      }
    }
  }
</script>

<style>

  /*~~~~~~~~~~~~~~~~~~~~Last artist image~~~~~~~~~~~~~~~~~~~~~~~*/

  #last-artist-img{
    width: 50px;
    height : 50px;
    border-radius: 8px;
    overflow: hidden;
  }
  #last-artist-img img{
    border-radius: 8px;
    width: 100%;
  }

  /*~~~~~~~~~~~~~~~~~~~~Text~~~~~~~~~~~~~~~~~~~~~~~*/

  .last-artist-box h3{
    text-align: start;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
  }

  #name{
    font-size: 1.2rem;
  }
  
  /*~~~~~~~~~~~~~~~~~~~~Box~~~~~~~~~~~~~~~~~~~~~~~*/

  .last-artist-box{
    border-radius: 25px;
    padding: 1rem;
    background-color: var(--accent-color);
  }

  .last-artist-infos{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /*~~~~~~~~~~~~~~~~~~~~Responsive~~~~~~~~~~~~~~~~~~~~~~~*/

  @media screen and (max-width: 1000px) {
    .last-artist-box{
      width: 55%;
    }
  }

</style>