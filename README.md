# Vue Workshop

Welcome to the Vue Typescript workshop! In this workshop we will learn how to work with Vue, using Typescript, Class Syntax and Single File Components. This workshop is part of the fullstack course, where students are creating a RESTful API. We will use Vue to render a front-end for this API!

The workshop consists an installation guide, part 1 (this page) and part 2.

## Contents

- Installing
- Vue Workflow
- What is a Vue component
- Single file components
- Class syntax
- Reactive data
- Clicks, styles and directives
- Continuing with part 2
- Reading list and documentation

## Installing

Follow the [installation instructions](https://github.com/HR-CMGT/vue-starter)

## Vue Workflow

Study the [Vue Workflow presentation](workflow.md)

## What is a Vue component

A Vue component is a DOM element that can have data and interactivity. A Vue component can respond very fast to changes in the state of your app. When you declare a Vue component, you can add:

- **data**: data contains the state of your component. For example: `user = "erik"`
- **methods**: actions that your component can execute, for example: `loadStarWarsData()`

As we have seen in the presentation, a component can have child components, creating a hierarchy. Child components can have:

- **props**: information that the component receives from a parent component
- **events**: information that the component broadcasts to parent components

## Single file components

A `.vue` file contains HTML, CSS and Code for one single component. This makes components easily reusable and prevents spaghetti code.

**app.vue**
```
<template>
   <div>Hello world</div>
</template>

<script>
   // our vue component code goes here
</script>

<css>
   div {border: 1px solid black;}
</css>
```
## Class syntax

In this tutorial, we use class syntax to define our Vue components. CMGT PRG06 students are already familiar with this syntax since we used it to build [games in Typescript](https://github.com/HR-CMGT/Typescript). 

As a reminder, a Typescript class is described and instantiated like this:
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
    created(){
        console.log("this vue component was just created!")
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

new App({el: "#app"})
```

## Reactive data

The strength of Reactive frameworks such as Vue, React and Angular is that it we can bind DOM elements (our UI) to data in components. This is called **reactive data**. As a comparison, without a reactive framework you would have to call an update function manually, every time your state has changed:
```
<div id="user"></div>
// we have to keep track of changes in this.user.name and then call the update function
function updateUI(){
   let element = document.getElementById("user")
   element.innerHTML = this.user.name
}
```
In a reactive framework, we use moustache syntax `{{ }}` to connect a variable directly to a DOM element.
```
<div>{{ variable }}</div>
class App {
    variable = "hello world"
}
```
Now, the text in the `<div>` will reflect the value of `variable` automatically.

Let's build a single file component with reactive data! In the `created` method, we change a variable over time to check if the connected DOM element automatically changes along:
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

## But does it run?

Run `webpack` in your terminal and open the page in localhost. For debugging, open the Vue inspector in Chrome.

## Clicks, styles and directives

We will check how to add button handlers to our templates, how to link css styles to variables, and how to use computed properties.

### Clicks



### Variable styles

Let's create a box that turns red when a variable is false, and green when the variable is true.

When your comparison code becomes too complex you can put the code in the class, and reference it as a `computed property`.

### Directives

We are going to show an entire `div` only when a variable is true, and we are going to render a whole list of divs depending on the number of variables in an array.

## Vue Workshop part 2

In part 2 we will look at:

- Working with child components
- Adding Props
- Adding Events
- Input field and model

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
