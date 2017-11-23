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
If we apply the theory from the presentation, we could create a child component for every `div` that has a specific function. How about:
```
<html>
    <title></title>
    <card v-for="f in films"></card>
</html>
```

When looping through t