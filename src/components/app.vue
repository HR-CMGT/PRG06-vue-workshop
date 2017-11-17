<template>
    <div>
        <div>{{ title }}</div>
        <div class="card" v-for="f in films" :key="f.episode_id">{{f.title}}</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
    title: string = "Loading..."
    films: Film[] = []
    created(){
        this.getStarWarsData().then(data => { 
            this.films = data.results
            this.title = "Star Wars Movies"
        })
    }
    async getStarWarsData() : Promise<any> {
        let res = await fetch("https://swapi.co/api/films/")
        return await res.json()
    }
}
</script>

<style>
body {
    font-family: sans-serif;
    background-color: #ccc;
    margin:0px; padding:0px;
}

div {
    box-sizing: border-box;
}

.card {
    background-color:white;
    padding:10px; margin:10px;
    border-radius:10px;
    
}
</style>
