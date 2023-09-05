<template>
    <div class="drink-card">
        <div class="img-wrapper">
            <img :src="cocktail.image" alt="">
        </div>
        <h2>
            {{ cocktail.name }}
        </h2>
    </div>
</template>
<script>

export default {
    name: 'SingleCard',
    props:{
        'cocktail' : Object
    }
    
}
</script>
<style lang="scss">
    
@use '../styles/partials/variables' as *;

.drink-card{
    background-color: $header-footer;
    color: white;
    padding: 15px;
    border-radius: 10px;
    width: calc( (100% / 3) - 20px );
    height: 200px;

    *{
        margin-bottom: 10px;
    }

    &:hover{
        cursor: pointer;
        background-color: rgba(35, 47, 99, 0.767);
    }

}
</style>