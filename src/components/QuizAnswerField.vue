<template>
    <input class="textField" type="text" placeholder="Type your answer here"/>
    <input id="test" v-model="answer"/>
    {{ answer }}
    <button v-on:click="foo">Delete</button>
</template>

<script>
export default{
    name: 'QuizAnswerField',
    data() {
        return {
            answer: "toto",
            artist: "empty"
        }
    },
    methods: {
        foo() {
            this.answer = ""
        },
        setAnswer(artistName){
            this.artist = artistName;
        }
        // checkAnswer() {

        //     if(this.answer == )
        // }
    }
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