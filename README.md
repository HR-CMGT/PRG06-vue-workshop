# Vue Workshop

This guide explains how to work with Typescript single file components, using class syntax.
- Class syntax makes a vue component much easier to read
- Typescript provides live error checking while typing in your IDE
Please note that this syntax is different from the default Javascript syntax that is used in the [Vue Getting Started documentation](https://vuejs.org/v2/guide/)

## Contents

- Installing
- Vue Workflow
- Single file components
- What is a Vue component
- Class syntax
- Reactive data
- Adding Props
- Adding Events
- Reading list and documentation

## Installing

Follow the [installation instructions](https://github.com/HR-CMGT/vue-starter)

## Vue Workflow

Study the [Vue Workflow presentation](workflow.md)

## Single file components

A `.vue` file contains HTML, CSS and Code for one single component. This makes components easily reusable and prevents spaghetti code.
```
<template>
   <div>Hello world</div>
</template>

<script>
   console.log("hello world")
</script>

<css>
   div {border: 1px solid black;}
</css>
```
When compiling, webpack extracts these .vue files into separate script and css files, but we don't need to worry about that!

## What is a Vue component

A Vue component is essentially just a `div` that can respond very fast to changes in the state of your app. When you declare a Vue component, you can add data and methods to make the div respond to state and user interaction.

- data: this is the state of your component. For example: `user = "erik"`
- methods: actions that your component can execute, for example: `loadStarWarsMovies()`

Each Vue component has a number of default methods, called [lifecycle hooks](https://vuejs.org/v2/guide/instance.html). These methods are automatically executed when an event happens. For example, the `created()` method is called when the Vue component is created:

```
created(){
   console.log("this vue component was just created!");
}
```

## Class syntax

## Reactive data

## Adding Props

## Adding Events

## Reading List

- [Vue documentation: Introduction](https://vuejs.org/v2/guide/index.html)
- [Vue documentation: Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
- [CSS Tricks: introduction to Vue](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)
- [Typescript Class Components tutorial](https://alligator.io/vuejs/typescript-class-components/)
- [Vue Class Component on github](https://github.com/vuejs/vue-class-component)
- [Vue documentation: typescript support](https://vuejs.org/v2/guide/typescript.html)
- [Using Vue components without Webpack](https://vuejsdevelopers.com/2017/09/24/vue-js-single-file-javascript-components/)
- [Microsoft Typescript Vue Starter](https://github.com/Microsoft/TypeScript-Vue-Starter)
