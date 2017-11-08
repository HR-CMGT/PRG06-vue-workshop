<template>
    <div class="card">
        <div>De naam is {{name}}</div>
    </div>
</template>



<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component
    export default class Card extends Vue {
        @Prop()
        name:string
        created() {
            console.log("card created")
        }
    }
</script>



<style scoped>
    .card {
        width:200px;  /* todo bg image cover zodat niet uitgerekt wordt */
        margin-left:2vw;
        margin-top:10vh;
        background-color: white;
        border-radius: 10px;
        padding:20px;
        text-align: center;
        display:inline-block;

        -webkit-box-shadow: 8px 8px 32px -10px rgba(0,0,0,0.66);
        -moz-box-shadow: 8px 8px 32px -10px rgba(0,0,0,0.66);
        box-shadow: 8px 8px 32px -10px rgba(0,0,0,0.66);
    }
    
    .card img {
        width:140px;height:184px;
        border-radius: 8px;
    }

    .disabled {
        pointer-events: none;
    }


</style>