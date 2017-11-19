# Vue Workshop

Welcome to the Vue Typescript workshop! In this workshop we will learn how to work with Vue, using Typescript, Class Syntax and Single File Components. This workshop is part of the fullstack course, where students are creating a RESTful API. We will use Vue to render a front-end for this API!

## Part 1

- Installing
- Vue Workflow
- Single file components
- Class syntax
- Reactive data
- Loading JSON data
- Clicks and conditionals
- Styles
- Continuing with part 2
- Reading list

## Installing

Follow the [installation guide](./presentation/install.md)

## Vue Workflow

Study the [Vue Workflow](./presentation/workflow.md)

## Single file components

We can bundle HTML, CSS and Typescript code together in one single `.vue` file:

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

As a reminder, a Typescript class is described and instantiated like this:

**app.ts**
```
class App {
    user: string = "erik"
    login():void {
        console.log("logged in as " + this.user);
    }
}

let a = new App()
a.login()
```

In Vue, we can create a component by extending (*inheriting*) the default Vue class. To do that, we need to `import` Vue first. We can add state to the component by adding class properties:

**app.vue**
```
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
    name: string = "world!"
    sayHello() {
        console.log("hello " + this.name)
    }
}
</script>
```
*If you are familiar with [Vue in Javascript](https://vuejs.org/v2/guide/), you might expect a `data` and a `methods` object, but we don't need those when using [class syntax](https://alligator.io/vuejs/typescript-class-components/)*.

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
Run `webpack`. Does the UI update every second?

## Loading JSON data

Since you have already built a RESTful API, we might as well use that data to populate our Vue app. [Read this guide on how to load and display data from your API](./presentation/loading.md)

After loading our JSON data into an array, we can visualise the array using a `v-for` loop.

```
<template>
    <div>
        <div v-for="f in films" :key="f.episode_id">{{f.title}}</div>
    </div>
</template>
```
Inside the div, we can use the `f` variable to display data from one particular movie. Let's create a card that displays the title, director, year and opening crawl of all Star Wars movies:

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
You will notice that the template code for the movie gets more complex. This is a perfect opportunity to create a child component for a movie! But before we do that, let's go over a few more basics first:

## Clicks and conditionals

By using `@Click` you can bind a DOM element to a method. We will also use `v-if` to show the button only if the number of movies in the array is 0. 

```
<button v-if="films.length == 0" @click='loadMovies'>Load movies</button>

export default class App extends Vue {
    loadMovies(){
       console.log("button was clicked)
    }
}
```

## Styles

In the previous example, the loading button is still clickable while the app is busy loading JSON. It would be better to disable the button when we are already loading data. 

This example binds a CSS class to the button - the class is only added when the 'isLoading' boolean is true.
```
<button :class="{ disabled: isLoading }" @click='loadMovies'>Load movies</button>

export default class App extends Vue {
    isLoading: boolean = false
    loadMovies(){ ... }
}
```
Can you figure out where to set the loading status to true and false? By the way, you also need the CSS for a disabled status:
```
.disabled {
    pointer-events: none;
    opacity: 0.4;
}
```

## Vue Workshop part 2

Congratulations! You should now be able to build a single Vue component with data binding, button clicks and dynamic styles. In [part two](./presentation/workshop2.md) we are going to use child components to build a more complex app.

## Reading List

- [Vue documentation: Introduction](https://vuejs.org/v2/guide/index.html)
- [Vue documentation: Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
- [CSS Tricks: introduction to Vue](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)
- [Typescript Class Components tutorial](https://alligator.io/vuejs/typescript-class-components/)
- [Vue Class Component on github](https://github.com/vuejs/vue-class-component)
- [Vue documentation: typescript support](https://vuejs.org/v2/guide/typescript.html)
- [Using Vue components without Webpack](https://vuejsdevelopers.com/2017/09/24/vue-js-single-file-javascript-components/)
- [Microsoft Typescript Vue Starter](https://github.com/Microsoft/TypeScript-Vue-Starter)
- [Previous Typescript examples HR CMGT](https://github.com/HR-CMGT/Typescript)
