<template>
  <header>
    <span class="title">Guess the artist</span>
  </header>
</template>

<script>
export default {
  name: 'QuizHeader'
}
</script>

<style>
header{
  width: 100%;
  display: block;
  background-color: var(--text-secondary-color);
  padding: 1rem 0 1.5rem 0;
}

header .title{
  font-size: 2rem;
  color : var(--text-primary-color)
}
</style>