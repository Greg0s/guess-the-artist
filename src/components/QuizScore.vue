<template>
    <div id="results">
        <span class="label">Score</span><br> 
        <span class="value">{{ gameScore }} / {{ total }}</span>
        <span class="label">Success rate</span><br> 
        <span class="value">{{ gameSR }}%</span>
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
        text-align: left;
        outline: 1px solid var(--text-primary-color);  /* inner stroke */
        outline-offset: -1px;  /* negative border width + outline width */
        border-radius: 25px;
        padding: 1rem;
        width: 25%;
        height: 25%;

    }
    .value{
        font-weight: bold;
        font-size: 1.6rem;
    }
    .label{
        font-weight: light;
        font-size: 0.8rem;
        font-family: 'Inter', sans-serif;
    }
</style>