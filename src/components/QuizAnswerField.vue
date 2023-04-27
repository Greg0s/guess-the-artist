<template>
    <div class="fields">
        <div class="textfield-box">
            <input @keyup.enter="checkAnswer" placeholder="Type answer here" id="textField" v-model="attempt"/>
            <span id="white-bg"></span>
            <svg @click="checkAnswer" id="arrow" viewBox="0 0 18 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7652 3.26517C17.9116 3.11872 17.9116 2.88128 17.7652 2.73483L15.3787 0.34835C15.2322 0.201903 14.9948 0.201903 14.8483 0.34835C14.7019 0.494796 14.7019 0.732233 14.8483 0.87868L16.9697 3L14.8483 5.12132C14.7019 5.26777 14.7019 5.5052 14.8483 5.65165C14.9948 5.7981 15.2322 5.7981 15.3787 5.65165L17.7652 3.26517ZM0 3.375H17.5V2.625H0V3.375Z"/>
            </svg>
        </div>
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
            if(this.attempt != ""){
                this.toApp(this.attempt);
            }
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
        border: none;
        /* border: 1px solid var(--text-primary-color); */
        width: 80%;
        background: transparent;
        /* margin-bottom: 1rem; */
        color: var(--text-primary-color);
    }
    #textField:focus{
        outline: none;
    }
    .textfield-box{
        position: relative;
    }
    #white-bg{
        /* border: 1px solid var(--text-primary-color); */
        outline: 1px solid var(--text-primary-color);  /* inner stroke */
        outline-offset: -1px;  /* negative border width + outline width */
        text-align: start;
        width: 100%;
        height: 10rem;
        position: absolute;
        z-index: -1;
        bottom: 0;
        border-radius: 25px;
        display: block;
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
        margin-top: 1rem;
        cursor: pointer;
    }
    button.skip:hover{
        background-color: var(--accent-color);
        color: var(--text-primary-color);
        border:none;
    }
    #arrow{
        fill: var(--text-primary-color);
        width: 30px;
        position: absolute;
        right: 1.5rem;
        bottom: 0.7rem;
        background-color: var(--background-color-primary);
        height: 1rem;
        border-radius: 0;
        cursor: pointer;
        transition: transform .2s ease-in-out;
    }
    #arrow:hover{
        transform: translateX(5px);
    }
</style>