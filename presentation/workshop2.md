# Vue Workshop

This is part 2 of the Vue workshop. Please follow [part 1](../README.md) first! In this part we will work with 

- Child components
- Props 
- Events

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
Let's start by removing all the movie detail HTML and replace it with `<card>`. The card will hold all the detail HTML.
```
<template>
    <div>
        <div><h2>{{ title }}</h2></div>
        <card></card>
    </div>
</template>
```
## The card component

Create a `Card.vue` file:

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

We want our card to display movie details, so let's pass some data from App to Card. This is done using **props**.

**App.vue**

We'll start by passing the literal string "The Force Awakens" to the card:

`<card movietitle="The Force Awakens"></card>`

**Card.vue**

The card component needs to know that the parent is sending a variable (a *Prop*). We do this by typing `@Prop()` before the variable declaration:

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

Again, check if this runs in your browser!

We might not want to pass "The Force Awakens" to every card component. We can use `v-bind:movietitle`, or the shortcut `:movietitle` to pass a variable. In this case, `title` is a variable on `App.vue`.

`<card :movietitle="title"></card>`

### Displaying a Card for each movie

In part 1 we used `v-for` to display a `<div>` for each movie. This works for components too. 

`<card v-for="f in films" :key="f.episode_id" :movietitle="f.title"></card>`

This should display a list of cards with all titles from the Star Wars movies! Check if it runs in your browser 👨🏼‍💻

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

If everything went well, your Chrome Debugger should look like this:

![debug2](./debug2.png)

## Props are reactive

A prop is a variable that is maintained by the parent, not by the child. In the above exercise, the list of movies is maintained by `App.vue` and displayed by `Card.vue`. If the array in `App.vue` changes, all cards will be automatically updated!

Because a prop is bound to the parent, you should not try to alter a movie's details in `Card.vue`. [Read more about the Vue Workflow](./workflow.md).

## Events

Since Vue components have no knowledge of their surroundings, events are the way for a component to respond to what happens in the application. In this example, the App component uses `v-on` to listen to a `movieclicked` event from the Card component.

APP.VUE
```
<card v-on:movieclicked="addToList(index)"></card>
```
Now, the card component uses `$emit` to send the `movieclicked` event:

CARD.VUE
```
<div @click='movieClicked'></div>

export default class Card extends Vue {
    movieClicked(){
        this.$emit('movieclicked')
    }
}
```

## Adding the watchlist component

We are going to build a new `Watchlist` component, that displays movies that we still want to watch. The example code here will show the main essentials. Try to integrate them into your project by yourself!

APP.VUE
```
// show a card for every movie in the array
<card v-for="(f,index) in films" :key="f.episode_id" :movie="f" :display="gridstyle" v-on:movieclicked="addToList(index)"></card>

// show the watchlist component only if the watchlater array is not empty
<watchlist v-if="watchlater.length > 0" :watchlater="watchlater" v-on:listitemclicked="removeFromList"></watchlist>

export default class App extends Vue {
    // add an array that holds our watchlater list
    watchlater :Film[] = []

    // create methods that can add movies to the watchlater list
    addToList(i:number){
        this.watchlater.push(this.films[i])
    }
    removeFromList(i:number){
        this.watchlater.splice(i,1)
    }
}
```

You can copy>paste the watchlater component, but you'll have to add a few things:

- display the number of movies, and how many hours it will take to watch them (assuming a movie takes 2 hours)
- add a button to remove the movie from the watchlist. the button calls the `remove` method, and that method `emits` an event to App! App removes the item from the watchlist.

WATCHLATER.VUE
```
<template>
    <div class="watchlist">
        <div>
            <h2>Watchlist</h2>
            <p>Watching N movies will take N hours</p>
        </div>
        <div class="watchitem" v-for="(f,index) in watchlater" :key="f.episode_id">
            <h4>{{f.title}}</h4>
            // add a remove button here
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import DataLoader from "../services/DataLoader"

@Component
export default class Watchlist extends Vue {
    @Prop() watchlater: Film[]
    remove(i:number){
        // call this method if the movie is clicked, and then emit an event!
    }
}
</script>
```


## Not everything is part of the UI

Not all logic of your app has to be inside a UI component. You can create standalone `.ts` classes for other logic, so that you can reuse that logic across all your components. In this example we create a calculator that we can `import` anywhere:

**Calculator.ts**
```
export default class Calculator {
    addNumbers(a:number, b:number) : number {
        return a + b
    }
}
```
**App.vue**
```
import Calculator from "./Calculator"
export default class App extends Vue {
    created() {
        let c = new Calculator()
        let result = c.addNumbers(12, 24)
    }
}
```

### Data Service

Let's put our data loading code in a separate class. We use a `static` function so we don't have to create instances of `DataLoader`. 

**DataLoader.ts**
```
export default class DataLoader {
    static async getStarWarsData(): Promise<any> {
        let res = await fetch("https://swapi.co/api/films/")
        return await res.json()
    }
}
```
**App.vue**
```
import DataLoader from "./DataLoader"

export default class App extends Vue {
    loadMovies(){
        DataLoader.getStarWarsData().then(data => { this.films = data.results })
    }
}
```
[Read more about working with import and export](https://www.typescriptlang.org/docs/handbook/modules.html)

## Dynamic components

- Vue allows switching components on the spot, instead of using `v-if` and `v-else` to display views. [Dynamic components](https://vuejs.org/v2/guide/components.html#Dynamic-Components)

## Vue Router

- Vue Router uses the URL bar to display views: [Vue Router](https://router.vuejs.org/en/)

## VueX

- VueX maintains all your data in a separate store, that you can subscribe to. [VueX](https://vuex.vuejs.org/en/)