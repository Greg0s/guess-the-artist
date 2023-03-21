<template>
    <div id="cover">
        <img alt="cover art" :src="imgSource"/>
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
    }
</style>