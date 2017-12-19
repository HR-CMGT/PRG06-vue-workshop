<template>
    <div>
        <!-- TODO show the navigation component -->
        <div>Load the navigation component here</div>

        <!-- TODO place these divs in the card component, and pass the movie as a prop -->
        <div class="card" v-for="f in films" :key="f.episode_id">
            <h3>{{f.title}}</h3>
            <p>{{f.director}}, {{f.release_date}}</p>
            <p>{{f.opening_crawl}}</p>
        </div>

        <!-- TODO show the watchlist component. use "v-if" to show it ONLY if there are movies in watchlater -->
        <div>Watchlist</div>
        
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Navigation from "./navigation.vue"

@Component({
    components: {Navigation}
})

export default class App extends Vue {
    films: Film[] = []
    watchlater: Film[] = []
    created(){
        this.getStarWarsData()
    }

    async getStarWarsData() {
        let res = await fetch("https://swapi.co/api/films/")
        this.films = (await res.json()).results
    }

    logTodoList(){
        console.log("let's start the workshop!")
        // FINISHED WORKSHOP COMPONENTS ARE IN THE FINISHED FOLDER
        // step 1
        // load json into this.films
        // show a div for each film
        // step 2
        // register and load the navigation component
        // step 3
        // register and load a card component, and show a card for each film in the array. 
        // use props to send the movie data to the card!
        // step 4
        // make the cards clickable. card can send an event to app! a click adds the movie to the watchlist array in app
        // step 5
        // register and load the watchlist component. only show it if the watchlist has more than 0 items
        // the watchlist has a prop for the movies in watchlater, and a click in the watchlist removes that movie from the watchlater array in app
    }
}
</script>

<style>
body {
    font-family: sans-serif;
    background: linear-gradient(#E64B8C, #95BFD8);
    margin:0px; padding:0px;
}

html {
    min-height: 100%;
}

h1, h2, h3, h4 {
    margin-top:0px;
	font-family: 'Audiowide', cursive;
}

div {
    box-sizing: border-box;
}

.cards {
    width:100vw;
    display:flex;
    flex-wrap: wrap;  /*cards can go to the next line*/
}
.columns {
    display:flex;
}
</style>