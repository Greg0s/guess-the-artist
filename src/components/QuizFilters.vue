<template>
    <div class="filters-container">
        <div class="filters decade">
            <span class="label">Decade: </span>
            <span class="filter nineties">1990s</span>
            <span class="filter twentyhundreds">2000s</span>
            <span class="filter twentytens">2010s</span>
        </div>
    </div>
</template>

<script>
export default{
    name: 'QuizFilters'
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