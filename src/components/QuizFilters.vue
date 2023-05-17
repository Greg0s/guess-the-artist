<template>
    <div class="filters-container">
        <div class="filters">
            <span class="label-text">Genre: </span>
            <input type="radio" id="all-genre" value="all" @change="checkGenre" v-model="checkedGenre">
            <label for="all-genre">All</label>
            <input type="radio" id="pop" value="pop" @change="checkGenre" v-model="checkedGenre" >
            <label for="pop">Pop</label>
            <input type="radio" id="rock" value="rock" @change="checkGenre" v-model="checkedGenre" >
            <label for="rock">Rock</label>
            <input type="radio" id="rap" value="rap" @change="checkGenre" v-model="checkedGenre" >
            <label for="rap">Rap</label>
            <input type="radio" id="edm" value="edm" @change="checkGenre" v-model="checkedGenre" >
            <label for="edm">EDM</label>
        </div>
        <div class="filters">
            <span class="label-text">Period: </span>
            <input type="radio" id="all-period" value="all" @change="checkPeriod" v-model="checkedPeriod">
            <label for="all-period">All</label>
            <input type="radio" id="old" value="old" @change="checkPeriod" v-model="checkedPeriod" >
            <label for="old">Old</label>
            <input type="radio" id="recent" value="recent" @change="checkPeriod" v-model="checkedPeriod" >
            <label for="recent">Recent</label>
        </div>
    </div>
</template>

<script>
export default{
    name: 'QuizFilters',
    emits : ["checkedGenre", "checkedPeriod"],
    data() {
        return {
            checkedGenre: "all",
            checkedPeriod: "all"
        }
    },
    async created() {

    },
    methods: {
        checkGenre(){
            console.log(this.checkedGenre);
            this.$emit('checkedGenre', { message : this.checkedGenre });
        },
        checkPeriod(){
            this.$emit('checkedPeriod', { message : this.checkedPeriod });
        }
    }
}
</script>

<style>
    .filters{
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: var(--accent-color);
        border-radius: 15px; */
    }
    input{
        display: none;
    }
    label{
        padding: calc(var(--element-size) * 0.1);
        font-size: calc(var(--element-size) * 0.3);
        height: calc(var(--element-size) * 0.35);
        cursor: pointer;
        z-index: 1;

    }
    input[type="radio"]:checked+label{
        border-radius: 15px ;
        background-color: var(--accent-color);
    }
    .label-text{
        font-family: 'Judson', 'serif';
        font-size: 1.2rem;
        font-weight: 700;
        margin-right: 0.5rem;
    }

    input[type="radio"]+label:hover{
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 15px;
    }
</style>