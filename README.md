# Vue Workshop

Welcome to the Vue Typescript workshop! In this workshop we will learn how to work with Vue, using Typescript, Class Syntax and Single File Components. This workshop is part of the fullstack course, where students are creating a RESTful API. We will use Vue to render a front-end for this API!

The workshop consists of an [installation guide](./presentation/install.md), part 1 (this page) and [part 2](./presentation/workshop2.md).

## Contents

- Installing
- Vue Workflow
- What are we going to build?
- Single file components
- Class syntax
- Reactive data
- Loading JSON data
- Styles and clicks
- Continuing with part 2
- Reading list

## Installing

Follow the [installation guide](./presentation/install.md)

## Vue Workflow

Study the [Vue Workflow presentation](./presentation/workflow.md)

## What are we going to build?

We will use `.vue` templates to define the HTML, CSS and code of our Vue components. We will add **state** (the data of our app) and we will **bind** UI elements to our state. 

In part 2 of the workshop we will add child components and think about how our data flows through our app.

## Single file components

We can bundle HTML, CSS and Typescript code together in one single `.vue` file:

**app.vue**
```
<template>
   <div>Hello world</div>
</template>

<script>
   // our vue component code goes here
</script>

<css scoped>
   div {border: 1px solid black;}
</css>
```
*note that this CSS is scoped. This means that these css rules only apply to the HTML template in the same .vue file*

## Class syntax

In this tutorial, we use class syntax to define our Vue components. CMGT PRG06 students are already familiar with this syntax since we used it to build [games in Typescript](https://github.com/HR-CMGT/Typescript). 

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
```

In Vue, we can create a component by extending (*inheriting*) the default Vue class. To do that, we need to `import` Vue first. A class can have properties and methods. 

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
*Please note that using Class syntax is different from the default Javascript syntax that is used in the [Vue Getting Started documentation](https://vuejs.org/v2/guide/). Read more about [Typescript Class components here](https://alligator.io/vuejs/typescript-class-components/)*.

## Kickstarting the app

We now have an App class, but no instance. We can create our app instance in the entry file of our app: `index.ts`. *(The entry file of our application is configured in `webpack.config.js`).*

**index.html**
```
<div id="app"></div>
```

**index.ts**
```
import App from "./components/App.vue"
new App({el: "#app"})     // supply the id of the div that will hold our Vue app
```

## But does it run?

Run `webpack` in your terminal and open the page in localhost. For debugging, open the Vue inspector in Chrome.

## Reactive data

The strength of Reactive frameworks such as Vue, React and Angular is that it we can bind DOM elements (our UI) to data in components. This is called **reactive data**. As a comparison, without a reactive framework you would have to call an update function manually, every time your state has changed:

**app.js - manually updating the DOM**
```
<div id="user"></div>
function updateUI(){
   let element = document.getElementById("user")
   element.innerHTML = this.name
}
```
In a reactive framework, we use moustache syntax `{{ }}` to connect our state directly to a DOM element.

**app.vue - reactive framework**
```
<div>{{ variable }}</div>
class App {
    variable = "hello world"
}
```
Now, the text in the `<div>` will reflect the value of `variable` automatically! Let's try this by building a single file component with reactive data. In the `created` method, we start a timer that changes a variable over time. The UI should reflect this automatically.

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
        setInterval(()=>this.updateName(), 500)
    }
    updateName(){
        this.name += "!"
    }
}
</script>
```
Run `webpack`. Does it work?

*Note: to improve readability, we will omit the `import` and `@component` statements in the next few examples. But you still need to include them!*

## Loading JSON data

Since you have already built a RESTful API, you might want to use that data to populate your Vue components. [Read this guide on how to load and display data from your API](./presentation/loading.md)

## Styles and clicks

This short code example shows how to respond to button clicks and how to bind a css style to a variable.
```
<template>
<div>
    <div :class="{ active: isActive }">The css of this div is bound to a variable</div>
    <div :class="{ active: enoughClicks }">The css of this div is bound to a function</div>
    <div @click='divClicked'>Number of clicks is {{ clicks }}</div>
</div>
</template>

<script lang="ts">
export default class App extends Vue {
    isActive:boolean = true
    clicks:number = 3
    get enoughClicks(){
        return true
    }
    divClicked(){
        this.clicks++;
    }
}

// css
.active {
    background-color:red;
}
```

## Buttons

We can add `@click` to a DOM element to connect it to a handler in our Typescript class:
```
<template>
   <div @click='divClicked'>Number of clicks is {{ clicks }}</div>
</template>

<script lang="ts">
export default class App extends Vue {
    clicks: number = 0
    divClicked(){
        this.clicks++;
    }
}
</script>

<css scoped>
    div: {cursor:pointer;}
</css>
```

## Vue Workshop part 2

In [part 2](./presentation/workshop2.md) we will look at:

- Working with child components
- Adding Props
- Adding Events

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
