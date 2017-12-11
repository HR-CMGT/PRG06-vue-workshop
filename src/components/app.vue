<template>
    <div>
        <div><h2>{{ title }}</h2></div>
        
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
    title: string = "Star Wars Movies"
    created(){
        console.log("hi!")
    }
}
</script>

<style>
body {
    font-family: sans-serif;
    background-color: #ccc;
    margin:0px; padding:10px;
}

div {
    box-sizing: border-box;
}

button {
    font-size:1.8em;
    margin:5px;
    cursor: pointer;
}

.disabled {
    pointer-events: none;
    opacity: 0.4;
}

.card {
    background-color:white;
    padding:10px; margin-bottom:10px;
    border-radius:6px;
}
</style>
