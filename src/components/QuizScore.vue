<template>
    <div id="results">
        <span id="score">Score: {{ gameScore }} / {{ total }}</span>
        <span id="success-rate">Rate: {{ gameSR }}%</span>
    </div>
</template>

<script>
export default{
    name: 'QuizScore',
    methods: {
        setCover(){
         console.log('hello')
        }
    }, 
    props: {
        gameScore : Number,
        gameSR : Number,
        total : Number
    }
}

</script>

<style>
    #results{
        display: flex;
        flex-direction: column;
    }
</style>