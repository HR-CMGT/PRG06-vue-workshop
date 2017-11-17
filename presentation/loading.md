# Working with JSON data

## Loading data

ES6 introduced the `window.fetch` method to load external data. We will use the new `async await` syntax to call our fetch method. 

```
export default class App extends Vue {
    films: Film[] = []
    created(){
        this.getStarWarsData().then(data => { this.films = data })
    }
    async getStarWarsData() {
        let res = await fetch("https://swapi.co/api/films/")
        return await res.json()
    }
}
```
## Displaying data

The great thing about Vue is that we only need to assign the JSON results to a reactive variable to populate the UI. You can bind the `actors` array to a repeating DOM element with `v-for`. In this example Vue will render a `<div>` for every film in our Films array. These divs will be added at the moment that the async function returns data.
*note that we need to supply a key, this should be a unique value, for example the movie's id*

```
<template>
    <div>
        <div v-for="f in films" :key="f.episode_id">{{f.title}}</div>
    </div>
</template>
```

## JSON Type definitions

Note that the variable that holds the Star Wars JSON is an array of type `Film`. We have defined this type in a `.d.ts` file. Check the `starwars.d.ts` file to see how you can declare your own types. VS Code will automatically include `.d.ts` declarations in your project when your restart.

![actors](dts.png)

## Reading List

- [MDN docs async await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Why async await is better than Promises](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)