<template>
    
    <div :class="display" @click='movieClicked'>
        <div :style="{backgroundImage:headerImage}"></div>
        <div>
            <h3>{{movie.title}}</h3>
            <p>{{movie.director}}, {{movie.release_date}}</p>
            <p>{{shortIntro}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import DataLoader from "../services/DataLoader"

@Component
export default class Card extends Vue {
    @Prop() movie: Film
    @Prop() display: string
    headerImage:string = ""
    created(){
        DataLoader.loadImage(this.movie.title).then(gifurl => { 
            this.headerImage = `url('${gifurl}')`
        })
    }
    movieClicked(){
        this.$emit('movieclicked')
    }
    get shortIntro():string {
        return this.movie.opening_crawl.substring(0,60) + "...<br>Add to watchlist"
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

.list {
    background-color:white;
    display:flex;
    margin:2vw;
    width:80vw; height:200px;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.list:hover {
	transform:scale(1.05);
	box-shadow: 0px 0px 45px rgba(0,0,0,0.8);
}
.list div:nth-child(1){
    background-color:slategray;
    background-size:cover;
    background-position: center;
    width:200px;
    height:200px;
}

.list div:nth-child(2){
    padding:12px; 
    height:200px;
}
</style>