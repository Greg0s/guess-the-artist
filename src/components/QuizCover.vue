<template>
    <div id="cover">
        <img alt="Artist picture" :src="imgSource"/>
    </div>
</template>

<script>
export default {
  name: 'QuizCover', 
  props: {
    imgSource : String
  }
}
</script>

<style>
    img{
        width: 100%;
        border-radius: 25px;
    }

    #cover{
      max-height: 50vh;
      overflow: hidden;
      border-radius: 25px;
    }

    @media screen and (max-width: 800px) {
      #cover{
        max-height: none;
        width: 75vw;
      }
    }
</style>