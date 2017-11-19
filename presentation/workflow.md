# Vue Workflow

This presentation will show you the concept behind building a Vue application.

## Components

Web components are a new proposal to isolate functionality in a  HTML element, for example:
```
<html>
    <navigation></navigation>
    <slideshow></slideshow>
    <testimonials></testimonials>
    <footer></footer>
</html>
```
A component contains not only HTML, but also CSS and Logic (Javascript). For example, the `<slideshow>` component might look like this:
```
<div>
    <img>...</img>
</div>
<script>
    // code for loading and switching images
</script>
<css>
   img { /*animation for images*/ }
</css>
```

## Component state

Internal variables of a component are called **state**. A component can visualise its own state by **binding** those variables to its own DOM elements.

```
<div>
    username
</div>
<script>
    username = "erik"
</script>
```
*simplified example*

## Encapsulation

Encapsulation means that a Vue component has no knowledge of its surrounding context, and the internal logic of a component is hidden from the outside world. 

## UI building blocks

![flow1](flow1.png)

A component can have child components

---

## State

![flow2](flow2.png)

A component can have a state and display that state in the **UI**.


![flow3](flow3.png)

Child components can have their own state.

![flow4](flow4.png)

A component can change its own state. In this example, clicking the **log out** button will change the loggedin state to false.

---
## Props

![flow5](flow5.png)

When our UI becomes more complex, we may want child components to be able to display the state of a parent. This is done using **props**. A **prop** is a *read-only* variable. A component can only **display** a prop but not alter it.

---
## Events

![flow6](flow6.png)

If we want a parent component to respond to changes in a child component, we have to listen to **events** that the child **emits**. 

The reason Vue works like this, is that the child does not need to know who is listening to the event. Only the parent can change its own state.

---

## Unilateral data flow

You may have noticed that components only ever pass data DOWN to child components. This is called unilateral data flow. The only way to respond to changes in child components, is to listen to events.

![flow7](flow7.png)

You made it! Now let's build something in [part 1 of the workshop](../README.md).