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

    #cover img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    }

    #cover{
      /* max-height: 65vh; */
      overflow: hidden;

      position: relative;
      padding-top: 100%;

    }
    
    @media screen and (max-width: 1000px) {
      #cover{
        width: 100%;
        height: 100%;
      }
    }
</style>