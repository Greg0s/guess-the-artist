<template>
    <div class="filters-container">
        <div class="filters decade">
            <span class="label">Genre: </span>
            <label for="all">All</label>
            <input type="radio" id="all" value="all" @change="check" v-model="checkedGenre">
            <label for="pop">Pop</label>
            <input type="radio" id="pop" value="pop" @change="check" v-model="checkedGenre" >
            <label for="rock">Rock</label>
            <input type="radio" id="rock" value="rock" @change="check" v-model="checkedGenre" >
            <label for="rap">Rap</label>
            <input type="radio" id="rap" value="rap" @change="check" v-model="checkedGenre" >
            <label for="edm">EDM</label>
            <input type="radio" id="edm" value="edm" @change="check" v-model="checkedGenre" >
            <!-- <span class="label">Genre: </span>
            <span class="filter twentytens">All</span>
            <span class="filter nineties">Pop</span>
            <span class="filter twentyhundreds">Rock</span>
            <span class="filter twentytens">Rap</span>
            <span class="filter twentytens">EDM</span> -->
        </div>
        <!-- <div class="filters decade">
            <span class="label">Decade: </span>
            <span class="filter nineties">1990s</span>
            <span class="filter twentyhundreds">2000s</span>
            <span class="filter twentytens">2010s</span>
        </div> -->
    </div>
</template>

<script>
export default{
    name: 'QuizFilters',
    emits : ["checkedGenre"],
    data() {
        return {
            checkedGenre: "all"
        }
    },
    async created() {

    },
    methods: {
        check(){
            console.log(this.checkedGenre);
            this.$emit('checkedGenre', { message : this.checkedGenre });
        }
    }
}
</script>

<style>
    .filters{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filter{
        background-color: violet;
        margin: 0.5em;
    }
</style>