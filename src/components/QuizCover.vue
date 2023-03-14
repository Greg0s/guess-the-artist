<template>
    <div id="cover">
        <img alt="cover art" :src="imgSrc"/>
    </div>
</template>

<script>
export default {
  name: 'QuizCover',
  data() {
    return { 
      imgSrc : "empty"
    }
  },
  methods: {
    setCover(imgUrl){
      this.imgSrc = imgUrl;
    }
  }
}
</script>

<style>
    img{
        border-radius: 25px;
    }
</style>