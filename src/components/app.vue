<template>
    <div>   
        <card v-for="n in names" :name="n" :key="n"></card>
    </div>   
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'
    import Card from "./card.vue"
    import DataService from "../classes/dataservice"

    @Component({
        components: {Card}
    })

    export default class App extends Vue {
        names:string[] = ["erik", "bob"]
        created() {
            let ds = new DataService()
            ds.getData("https://swapi.co/api/people/1/").then(data => this.dataLoaded(data))
        }
		dataLoaded(a:Actor){
            console.log("actor name is " + a.name)
            console.log(a)
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
</style>
