<template>
    <div class="jumbotron">
        <h1>
            {{ cocktail.name }}
        </h1>
    </div>
    <section class="cocktail-show">
        <SingleCard v-if="cocktail" class="drink-card" :cocktail='cocktail' />
    </section>
</template>

<script>
import axios from 'axios';
import SingleCard from '../components/SingleCard.vue'

export default {
    name: 'CocktailShow',
    components:{
        SingleCard
    },

    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
            cocktail : false,
        }
    },
    methods: {
        getCocktail(){
            console.log(this.$route.params.slug);
            axios.get(`${this.apiUrl}/api/cocktails/${this.$route.params.slug}`).then((response) => {
                console.log(response);
                this.cocktail = response.data.results;
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    created(){
        this.getCocktail();
    },
}
</script>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

.jumbotron{
    background-image: linear-gradient(rgba(200, 151, 151, 0.05), rgba(0, 0, 0, 0.80)), url(https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80);
    width: 100%;
    overflow: hidden;
    height: 300px;
    background-position: 45% 25%;
    position: relative;

    h1{
        font-family: 'Dancing Script', cursive;
        font-size: 400;
        color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
    }
}

.cocktail-show {
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: center;
    padding: 4rem 0;
}
</style>