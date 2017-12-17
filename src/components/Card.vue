<template>
    <div>
        Movie Card
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    created(){
        console.log("card is created!")
    }
}
</script>

<style scoped>
.card {
    background-color:white;
    margin:2vw;
    width:20vw; height:400px;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.card:hover {
	transform:scale(1.05);
	box-shadow: 0px 0px 45px rgba(0,0,0,0.8);
}
.card div:nth-child(1){
    background-color:slategray;
    background-size:cover;
    background-position: center;
    height:230px;
}

.card div:nth-child(2){
    padding:12px; 
    height:170px;
}
</style>
