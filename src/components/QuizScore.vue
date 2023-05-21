<template>
    <div id="results">
        <div>
            <span class="label">Score</span><br> 
            <span class="value">{{ gameScore }} / {{ total }}</span>
        </div>
        <div>
            <span class="label">Correct</span><br> 
            <span class="value">{{ gameSR }}%</span>
        </div>
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
    /*~~~~~~~~~~~~~~~~~~~~Results~~~~~~~~~~~~~~~~~~~~~~~*/
    #results{
        display: flex;
        text-align: left;
        outline: 1px solid var(--text-primary-color);  /* inner stroke */
        outline-offset: -1px;  /* negative border width + outline width */
        border-radius: 25px;
        padding: 1rem;
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

    /*~~~~~~~~~~~~~~~~~~~~Responsive~~~~~~~~~~~~~~~~~~~~~~~*/

    @media screen and (max-width: 1000px) {
        #results{
            width: 25%;
            height: 25%;
            flex-direction: column;
        }
        .value{
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1001px) {
        #results{
            flex-direction: row;
            justify-content: space-between;
        }
        /* Right offset correct rate */
        .label:nth-child(1){
            margin-right: 2rem;
        }
    }
</style>