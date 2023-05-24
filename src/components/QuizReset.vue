<template>
  <button class="btn reset" @click="reset">Reset score</button>
</template>

<script>
export default {
  name: 'QuizReset', 
  methods: {
    reset(){
            this.$emit("reset");
    }
  }
}
</script>

<style>
  .reset{
    width: 8rem;
    margin: auto;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media screen and (max-width: 1000px) {
    .reset{
      margin-top: 1rem;
    }
  }
</style>