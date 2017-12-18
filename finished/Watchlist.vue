<template>
    <div class="watchlist">
        <div>
            <h2>Watchlist</h2>
            <p>Watching {{watchlater.length}} movies will take {{watchlater.length*3}} hours</p>
        </div>
        <div class="watchitem" v-for="(f,index) in watchlater" :key="f.episode_id">
            <h4>{{f.title}}</h4>
            <p @click="remove(index)">Remove</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class Watchlist extends Vue {
    @Prop() watchlater: Film[]
    remove(i:number){
        this.$emit('listitemclicked', i)
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