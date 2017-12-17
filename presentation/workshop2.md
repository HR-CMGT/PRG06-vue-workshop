# Vue Workshop

This is part 2 of the Vue workshop. Please follow [part 1](../README.md) first! In this part we will work with 

- Child components
- Props 
- Events
- Code outside of components
- Where to go next

## Registering child components

Let's practice adding a component. This project contains `Navigation.vue`. To use this component, we can either register it globally (in `index.ts`), or locally, in the component where we need it. We need Navigation in App, so let's register it there. Don't forget to `import` it first.

APP.VUE
```
import { Vue, Component, Prop } from "vue-property-decorator"
import Navigation from "./navigation.vue"

@Component({
    components: {Navigation}
})

export default class App extends Vue {
 ...
}
```
Now we can add the Navigation component to our template!
```
<template>
    <div>
        <navigation></navigation>
    </div>
</template>
```

## The card component

When looping through the `films` array at the end of part 1, we ended up with the following template:
```
<template>
    <div>
        <div class="card" v-for="f in films" :key="f.episode_id">
            <h3>{{f.title}}</h3>
            <p>{{f.director}}, {{f.release_date}}</p>
            <p>{{f.opening_crawl}}</p>
        </div>
    </div>
</template>
```
Let's start by moving all the movie detail HTML from App.vue to Card.vue. Replace the divs with a single `<card>`. 

**App.vue**

```
<template>
    <div>
        <card v-for="f in films" :key="f.episode_id"></card>
    </div>
</template>
```

**Card.vue**

```
<template>
    <div>
        <div class="card" v-for="f in films" :key="f.episode_id">
            <h3>{{f.title}}</h3>
            <p>{{f.director}}, {{f.release_date}}</p>
            <p>{{f.opening_crawl}}</p>
        </div>
    </div>
</template>
```
To use the Card component in the App.vue, you can follow the same steps as we did with the Navigation component: use `import` and `@Component` to register the Card component!

## Props

If you try to run `webpack` now, you will get an error. The Card tries to display movie data, but the movie data is not available in the Card component! So let's pass data from App to Card. This is done using **props**. A prop is a parent variable that is displayed by a child.

### Example

**Parent**

`<card movietitle="The Force Awakens"></card>`

**Child**

Props are declared by typing `@Prop()` before the variable declaration:

```
<template>
    <div>
        <div>{{movietitle}}</div>
    </div>
</template>
@Component
export default class Card extends Vue {
    @Prop() 
    movietitle: string;
}
```

### Sending the movie object

Now we are ready to send the whole movie object as a prop:

APP.VUE

```
<card v-for="f in films" :key="f.episode_id" :movie="f"></card>
```

Now, Card can display all movie details from inside the card component. Note that `movie` is a `@Prop()`.

CARD.VUE
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

## Props are reactive !

A prop is a variable that is maintained by the parent, not by the child. In the above exercise, the list of movies is maintained by `App.vue` and displayed by `Card.vue`. If the array in `App.vue` changes, all cards will be automatically updated!

Because a prop is bound to the parent, you should not try to alter a movie's details in `Card.vue`. [Read more about the Vue Workflow](./workflow.md).

## Events

Since Vue components have no knowledge of their surroundings, events are the way for a component to respond to what happens in the application. In this example, the App component uses `v-on` to listen to a `movieclicked` event from the Card component. If that event happens, the `addToList` method will be called.

APP.VUE
```
<card v-on:movieclicked="addToList"></card>

export default class App extends Vue {
    addToList(){
        console.log("a card was clicked")
    }
}
```
In the Card component we can use `$emit` to send the `movieclicked` event. In this case, we emit this event after a button in Card has been clicked.

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

## Code outside of a component

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

### BONUS! Loading GIPHY images

Now that we have a dataloader, we can add methods to it to be used by our entire app. This example calls the GIPHY search engine, which returns an array of GIF urls. We then check if there is a proper url and return that.

DATALOADER.TS
```
export default class DataLoader {

    static async loadImage(img: string): Promise<any> {
        let url = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(img)}&api_key=dc6zaTOxFJmzC`
        let res = await fetch(url)
        let json = await res.json()
        return await DataLoader.checkData(json)
    }

    static async checkData(json: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (json.data.length == 0) {
                reject("No gif found!")
            } else {
                let ind:number = Math.floor(Math.random()*json.data.length)
                let gifurl: string = json.data[ind].images.fixed_height.url;
                resolve(gifurl);
            }
        })
    }
}
```
CARD.TS
```
<template>
    <div :style="{backgroundImage:headerImage}"></div>
</template>

<script lang="ts">
import DataLoader from "../services/DataLoader"

@Component
export default class Card extends Vue {
    headerImage:string = ""
    created(){
        DataLoader.loadImage(this.movie.title).then(gifurl => { 
            this.headerImage = `url('${gifurl}')`
        })
    }
}
</script>
```

# Where to go next

There's a lot to Vue we haven't touched yet!

## Dynamic components

Vue allows switching components on the spot, instead of using `v-if` and `v-else` to display views. You can use transitions between components.

- [Dynamic components](https://vuejs.org/v2/guide/components.html#Dynamic-Components)
- [Dynamic components tutorial](https://coligo.io/dynamic-components-in-vuejs/)

## Vue Router

- Vue Router uses the URL bar to display views: [Vue Router](https://router.vuejs.org/en/)

## VueX

- VueX maintains all your data in a separate store, that you can subscribe to. [VueX](https://vuex.vuejs.org/en/)