<template>
    <div>
        <SingleCard v-if="cocktail" class="drink-card" :cocktail='cocktail' />
    </div>
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

    
.drink-card{
    background-color: #010514;
    color: white;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    width: calc( (100% / 3) - 20px );
    font-family: 'Lora', serif;
    font-style: italic;
    //display: flex;

    img{
        width: 100%;
        object-fit: cover;
        height: 300px;
        justify-content: center;
        border-radius: 10px;
    }

    *{
        margin-bottom: 10px;
    }

    &:hover{
        cursor: pointer;
        background-color: rgba(2, 5, 22, 0.92);
    }

    h2{
        display: block;
        text-align: center;

        a{
            text-decoration: none;
        }
    }

}
</style>