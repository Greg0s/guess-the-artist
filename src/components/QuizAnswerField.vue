<template>
    <input class="textField" type="text" placeholder="Type your answer here"/>
    <input type="submit" value=" "/>
</template>

<script>
export default{
    name: 'QuizAnswerField'
}
</script>

<style>
    .textField{
        border-radius: 25px;
        height: 2rem;
        width: auto;
        display: block;
        margin: auto;
        border: 1px solid grey;
    }
</style>