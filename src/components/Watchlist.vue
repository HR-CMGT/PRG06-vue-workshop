<template>
    <div>
        Watchlist
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    created(){
        console.log("watchlist is created!")
    }
}
</script>

<style scoped>
.watchlist {
    display: flex;
    flex-direction: column;
    width:25vw; padding:10px; margin-right:1vw;
    background-color:rgba(255,255,255,0.5);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
}

.watchitem {
    background-color:white;
    width:90%;
    padding:10px; margin:5px auto;
    cursor:pointer;
}
</style>
