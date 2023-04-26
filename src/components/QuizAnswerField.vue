<template>
    <div class="fields">
        <input @keyup.enter="checkAnswer" id="textField" v-model="attempt"/>
        <button class="skip" @click="skip">Skip</button>
    </div>
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
    #textField{
        border-radius: 25px;
        height: 2rem;
        width: auto;
        display: block;
        margin: auto;
        border: 1px solid grey;
        width: 100%;
        margin-bottom: 1rem;
    }
    .fields{
        width:100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    button.skip{
        color: var(--text-primary-color);
        border-radius: 15px;
        background-color: var(--background-color-primary);
        border : 1px solid var(--text-primary-color);
        font-family: 'Inter', sans-serif;
        height: 2rem;
    }
</style>