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
            this.$emit('checkedGenre', { message : this.checkedGenre });
        },
        checkPeriod(){
            this.$emit('checkedPeriod', { message : this.checkedPeriod });
        }
    }
}
</script>

<style>
/*~~~~~~~~~~~~~~~~~~~~Filters - general~~~~~~~~~~~~~~~~~~~~~~~*/

.filters{
    display: flex;
    align-items: center;
}

.filters:nth-of-type(1){
    margin-bottom: 0.3rem;
}

/*~~~~~~~~~~~~~~~~~~~~Filters - input & label~~~~~~~~~~~~~~~~~~~~~~~*/

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

.label-text{
    font-family: 'Judson', 'serif';
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 0.5rem;
}

input[type="radio"]+label{
    transition: background-color 0.2s ease-in-out;
    border-radius: 15px;
}

input[type="radio"]:checked+label{
    background-color: var(--accent-color);
}

input[type="radio"]+label:hover{
    background-color: var(--background-color-secondary);
    z-index: 2;
}

/*~~~~~~~~~~~~~~~~~~~~Responsive~~~~~~~~~~~~~~~~~~~~~~~*/

@media screen and (min-width: 1001px) {
    .filters{
        display: flex;
        justify-content: left;
        text-align: left;
    }
    .filters-container{
        text-align: left;
    }
}

@media screen and (max-width: 1000px) {
    .filters{
        justify-content: center;
    }
}

</style>