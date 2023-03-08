<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Judson:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <h1 class="title">GuessTheArtist</h1>
  <QuizFilters />
  <QuizCover imgSrc="https://cdns-images.dzcdn.net/images/cover/0c424dbe627530cd06a6fd408baba3f3/500x500.jpg"/>
  <QuizAnswerField />
  <div id="test"></div>
</template>

<script>
import QuizFilters from './components/QuizFilters.vue'
import QuizCover from './components/QuizCover.vue'
import QuizAnswerField from './components/QuizAnswerField.vue'
import test from './services/api/musicbrainz.js'

const changeCover = async () => {
  const data = await test.getTopSongs2();
  console.log(data['quality']);
  document.querySelector('#test').innerHTML=data['quality'];
}

changeCover();

// const response = fetch("https://musicbrainz.org/ws/2/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd?fmt=json") 
// if (response.status == 200) {
// 	const data = response.json()
//   console.log(data);
// } else {
//   new Error(response.statusText)
// }

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
  font-family: 'Inter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  font-family: 'Inter', sans-serif;
}
h1{
  font-family: 'Judson', serif;
}

</style>