<template>
    <div id="cover">
        <img alt="Artist picture" :src="imgSource"/>
    </div>
</template>

<script>
export default {
  name: 'QuizCover',

  methods: {
    setCover(imgUrl){
      this.imgSrc = imgUrl;
    }
  }, 
  props: {
    imgSource : String
  }
}
</script>

<style>
    img{
        border-radius: 25px;
        max-height: 600px;

    }

    @media screen and (max-width: 800px) {
      img{
        max-height: none;
        width: 75vw;
      }
    }
</style>