<template>
    <input @keyup.enter="emit" class="textField" id="test" v-model="attempt"/>
    <button @click="clear">Delete</button>
</template>

<script>
export default{
    name: 'QuizAnswerField',
    emits : ["attempt"],
    data() {
        return {
            attempt: ""
        }
    },
    methods: {
        clear() {
            this.attempt = ""
        },
        emit(){
            this.$emit('attempt', { message : this.attempt});
            this.clear();
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