<template>
    <div id="img-container">
        <img alt="Artist picture" :src="imgSource"/>
    </div>
</template>

<script>
export default {
  name: 'QuizImg', 
  props: {
    imgSource : String
  }
}
</script>

<style>
  /*~~~~~~~~~~~~~~~~~~~~Artist image~~~~~~~~~~~~~~~~~~~~~~~*/

  #img-container img{
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

  #img-container{
    overflow: hidden;
    position: relative;
    padding-top: 100%;
  }

</style>