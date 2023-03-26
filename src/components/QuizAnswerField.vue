<template>
    <input @keyup.enter="checkAnswer" class="textField" v-model="attempt"/>
    <button @click="clear">Delete</button>
    <button @click="skip">Skip</button>
</template>

<script>
export default{
    name: 'QuizAnswerField',
    emits : ["attempt", "skip"],
    data() {
        return {
            attempt: ""
        }
    },
    methods: {
        clear() {
            this.attempt = ""
        },
        toApp(msg){
            this.$emit('attempt', { message : msg});
            this.clear();
        },
        checkAnswer(){
            this.toApp(this.attempt);
        },
        skip(){
            this.$emit("skip");
        }
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