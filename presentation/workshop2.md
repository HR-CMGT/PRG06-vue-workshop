# Vue Workshop

This is part 2 of the Vue workshop. Please follow part 1 first! In this part we will work with Child components, props and events. We will build a complete frontend for our Star Wars API.

## Child components

When looping through the `films` array at the end of part 1, we ended up with the following template:
```
<template>
    <div>
        <div><h2>{{ title }}</h2></div>
        <div class="card" v-for="f in films" :key="f.episode_id">
            <h3>{{f.title}}</h3>
            <p>{{f.director}}, {{f.release_date}}</p>
            <p>{{f.opening_crawl}}</p>
        </div>
    </div>
</template>
```
Let's create a simple card component for the movie details, making App.vue look a lot simpler:
```
<template>
    <div>
        <div><h2>{{ title }}</h2></div>
        <card></card>
    </div>
</template>
```
## The card component

We'll start by creating a basic child component. Create a `Card.vue` file.

**Card.vue**

```
<template>
    <div>
        <h3>I am a card!</h3>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    created(){
        console.log("Card is created!")
    }
}
</script>

<style scoped>
</style>
```

## Importing the Card component

To use the Card component in the main App, we'll need to:
- `import` the card component. 
- use the `@component` decorator to *register* Card as a Vue component
- use `<card></card>` in our template!

**App.vue**

```
<template>
    <div>   
        <h2>Vue app</h2>
        <card></card> 
    </div>   
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator"
    import Card from "./card.vue"

    @Component({
        components: {Card}
    })

    export default class App extends Vue {
        // app code here
    }
</script>

<style>
</style>
```
### Does it run?

Check your browser and see if the child component is correctly loaded!

## Passing data to a child component

We want our card to display movie details, so let's pass the movie data for one movie from App to Card. This is done using **props**.

**App.vue**

This example shows how to pass a literal string (`The Force Awakens`) to our card:

`<card movietitle="The Force Awakens"></card>`

If we want to pass a variable value, we have to use `v-bind:movietitle`, or the shortcut `:movietitle`. In this example, `title` is a variable in App.vue.

`<card :movietitle="title"></card>`

**Card.vue**

In the card component we have to declare the movietitle as a `@Prop()`. Then we can use it in our template:

```
<template>
    <div>
        <div>{{movietitle}}</div>
    </div>
</template>
@Component
export default class Card extends Vue {
    @Prop() movietitle: string;
}
```

### Displaying a Card for each movie

In part 1 we used `v-for` to display a `<div>` for each movie. This works for components too. 

`<card v-for="f in films" :key="f.episode_id" :movietitle="f.title"></card>`

Check if this works in your browser!

### Passing an entire object

Instead of passing just the movie title, we might as well pass the entire movie object. 

**App.vue**

`<card v-for="f in films" :key="f.episode_id" :movie="f"></card>`

Now, we can display all movie details from inside the card component. Note that `movie` is a `@Prop()`.

**Card.vue**
```
<template>
    <div class="card">
        <h3>{{movie.title}}</h3>
        <p>{{movie.director}}, {{movie.release_date}}</p>
        <p>{{movie.opening_crawl}}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    @Prop() movie: Film;
}
</script>

<style scoped>
.card {
    background-color:white;
    padding:10px; margin-bottom:10px;
    border-radius:6px;
}
</style>
```

## Events

TODO

- emit
- listen