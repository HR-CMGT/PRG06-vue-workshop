<template>
    <div>
        <div class="greeting">Hi there {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Block extends Vue {
    @Prop() name: string;
    @Prop() initialEnthusiasm: number;

    enthusiasm = this.initialEnthusiasm;

    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style scoped>
.greeting {
    font-size: 20px;
}
</style>
