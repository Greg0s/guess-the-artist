<template>
  <footer>
    <span class="text">Made by <a target="_blank" href="https://gregoiretinn.es">Grégoire Tinnes</a> with the <a target="_blank" href="https://developer.spotify.com/documentation/web-api">Spotify API</a></span>
  </footer>
</template>

<script>
export default {
  name: 'QuizFooter',
}
</script>

<style>
footer{
  width: 100%;
  display: block;
  background-color: var(--text-secondary-color);
  padding: 1rem 0 1.5rem 0;
}

footer .text{
  font-size: 0.8rem;
  color : var(--text-primary-color);
  opacity: 0.5;
}

footer .text a{
  text-decoration: none;
  color : var(--text-primary-color);
}

footer .text a:hover{
  text-decoration: underline;
}
</style>