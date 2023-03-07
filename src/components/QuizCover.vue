<template>
    <div id="cover">
        <img alt="cover art" :src="imgSrc"/>
    </div>
</template>

<script>
export default {
  name: 'QuizCover',
  props: {
    imgSrc: String
  }
}
</script>

<style>
    img{
        border-radius: 25px;
    }
</style>