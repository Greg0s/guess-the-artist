<template>
  <h1 class="title">GuessTheArtist</h1>
  <QuizFilters />
  <QuizCover imgSrc="https://cdns-images.dzcdn.net/images/cover/0c424dbe627530cd06a6fd408baba3f3/500x500.jpg"/>
  <QuizAnswerField />
</template>

<script>
import QuizFilters from './components/QuizFilters.vue'
import QuizCover from './components/QuizCover.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'

export default {
  name: 'App',
  components: {
    QuizFilters,
    QuizCover,
    QuizAnswerField
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>