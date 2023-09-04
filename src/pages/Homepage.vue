<template>
    <div>
        <div class="jumbotron">
            <h1>
                Welcome to the Cocktail Club
            </h1>
        </div>
        <div class="main">
            <h1>
                Our Cocktails
            </h1>
            <div class="card-wrapper">

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Homepage'
    
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

    
    
        .jumbotron{
            background-image: linear-gradient(rgba(200, 151, 151, 0.05), rgba(0, 0, 0, 0.80)), url(https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80);
            width: 100%;
            overflow: hidden;
            height: 650px;
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

        .main{
            background-color: $background-color;

            h1{
                color: $text;
                font-family: 'Dancing Script', cursive;
                padding: 50px 60px;

            }

            .card-wrapper{
                width: 80%;
                display: flex;
                flex-wrap: wrap;
            }
        }
    

    

</style>