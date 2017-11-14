<template>
    <div>
        <div>App {{name}}</div>
        <block :name="name" :initialEnthusiasm="3"></block>
        <card :name="name" :initialEnthusiasm="8"></card>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "./Card.vue";
import Block from "./Block.vue";

@Component({
    components: {Block, Card}
})
export default class App extends Vue {
    name: string = "henk";
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
