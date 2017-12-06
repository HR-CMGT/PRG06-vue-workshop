# Vue Workshop

Welcome to the Vue workshop! In this workshop we will learn how to work with Vue, using Typescript, Class Syntax and Single File Components. This workshop is part of the fullstack course. We will use Vue to render a front-end for a RESTful API. 

![Screenshot](./presentation/screenshot.png)

## What is Vue?

Study the [Vue Workflow](./presentation/workflow.md)

## Installing

Follow the [installation guide](./presentation/install.md)

## Workshop part 1

- Single file components
- Class syntax
- Reactive data
- Loading JSON data
- Clicks and conditionals
- Styles
- Continuing with part 2
- Reading list

## Single file components

A Vue component can bundle HTML, CSS and Typescript code together in one single `.vue` file:

**app.vue**
```
<template>
   <div>HTML markup goes here</div>
</template>

<script lang="ts">
   console.log("typescript code goes here")
</script>

<css scoped>
   div {border: 1px solid black;}
</css>
```
*note that this CSS is scoped. This means that these css rules only apply to the HTML template in the same .vue file*

## Class syntax

In this tutorial, we use *class syntax* to define our Vue components. CMGT PRG06 students are already familiar with this syntax since we used it to build [games in Typescript](https://github.com/HR-CMGT/Typescript). 

Class syntax simplifies how a Vue component is defined. This example compares Vue component in basic javascript syntax and class syntax.

**javascript syntax**
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Data contains the state of the app',
    turtles: ["Leonardo","Donatello","Michaelangelo","Raphael"]   
  },
  methods: {
    addTurtle:function(){
      this.turtles.push("Another turtle...")
    }
  },
  created() {
    this.message = "Let's list some turtles!"
    setInterval(()=>this.addTurtle(), 5000)
  }
})
```
**class syntax**
```
class App extends Vue {
    message = 'Data contains the state of the app'
    turtles = ["Leonardo","Donatello","Michaelangelo","Raphael"]   
    addTurtle() {
        this.turtles.push("Another turtle...")
    }
    created(){
        this.message = "Let's list some turtles!"
        setInterval(()=>this.addTurtle(), 5000)
    }
}
```
[Read more about class syntax](https://alligator.io/vuejs/typescript-class-components/)

## Kickstarting the app

We now have an App class, but no instance. We have to instantiate our app in `index.ts`. *The entry file of an application is configured in `webpack.config.js`.*

**index.html**
```
<div id="app"></div>
```

**index.ts**
```
import App from "./components/App.vue"
new App({el: "#app"})
```

## But does it run?

Run `webpack` in your terminal and open the page in localhost. For debugging, open the Vue inspector in Chrome.

## Reactive data

In the old days, without a reactive framework, we had to call an update function every time our data changed:

**app.js - manually updating the DOM**
```
<div id="user"></div>
function updateUI(){
   let element = document.getElementById("user")
   element.innerHTML = this.name
}
```
In Vue, (and React, Angular) we can bind DOM elements to data. This is called **reactive data**.  We use moustache syntax `{{ }}` to bind data.

**app.vue - reactive framework**
```
<div>{{ variable }}</div>
class App {
    variable = "hello world"
}
```
Now, the text in the `<div>` will reflect the value of `variable` automatically! Let's try this by building a single file component with reactive data. In the `created` method, we start a timer that changes a variable over time..

**app.vue**
```
<template>
   <div>Hello {{ name }}</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
    name: string = "world"
    created(){
        setInterval(()=>this.updateName(), 1000)
    }
    updateName(){
        this.name += "!"
    }
}
</script>
```
Run `webpack` and open the browser. Does the UI update every second?

## Loading JSON data

[Read this guide on how to load and display data from an external API](./presentation/loading.md). 

In the below example, we are reading JSON and placing the results in the `films` array. In our HTML template, we create a `<div>` for each entry in the array using a `v-for` loop.

```
<template>
    <div>
        <div v-for="f in films" :key="f.episode_id">{{f.title}}</div>
    </div>
</template>

export default class App extends Vue {
    films: Film[] = []
    loadMovies(){
        this.getStarWarsData().then(data => { this.films = data.results })
    }
    async getStarWarsData() : Promise<any> {
        let res = await fetch("https://swapi.co/api/films/")
        return await res.json()
    }
}
```
Inside the div, we can use the `f` variable to display all details from one particular movie:
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
You will notice that the template code for the movie is getting more complex. This is a perfect opportunity to create a child component for a movie! But before we do that, let's go over a few more basics first:

## Clicks and conditionals

By using `@Click` you can bind a DOM element to a method. We'll use `v-if` to show a button if the number of movies in the array is 0. 

```
<button v-if="films.length == 0" @click='loadMovies'>Load movies</button>

export default class App extends Vue {
    loadMovies(){
       console.log("button was clicked)
    }
}
```

## Styles

In the previous example, the loading button is still clickable while the app is busy loading JSON. Let's see if we can disable the button while data is loading. 

We'll bind a `disabled` CSS class to the button when the `isLoading` status is true.
```
<template>
    <div>
        <button :class="{ disabled: isLoading }" @click='loadMovies'>Load movies</button>
    </div>
</template>

<script lang="ts">
export default class App extends Vue {
    isLoading: boolean = false
}
</script>
<style>
.disabled {
    pointer-events: none;
    opacity: 0.4;
}
</style>
```
Can you figure out how to set the loading status to true and false? 

## Vue Workshop part 2

Congratulations! We have built a Vue component with data binding, button clicks and dynamic styles!

In [part two](./presentation/workshop2.md) we are going to use child components to build a more complex app.

## Reading List

- [Vue documentation: Introduction](https://vuejs.org/v2/guide/index.html)
- [5 practical examples for learning Vue.js](https://tutorialzine.com/2016/03/5-practical-examples-for-learning-vue-js)
- [Vue documentation: Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
- [CSS Tricks: introduction to Vue](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)
- [Typescript Class Components tutorial](https://alligator.io/vuejs/typescript-class-components/)
- [Vue Class Component on github](https://github.com/vuejs/vue-class-component)
- [Vue documentation: typescript support](https://vuejs.org/v2/guide/typescript.html)
- [Microsoft Typescript Vue Starter](https://github.com/Microsoft/TypeScript-Vue-Starter)
- [Previous Typescript examples HR CMGT](https://github.com/HR-CMGT/Typescript)
- [Using Headers with Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Using Promises](https://davidwalsh.name/promises)
- [Using Async Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Binding Styles in Vue](https://vuejs.org/v2/guide/class-and-style.html)
