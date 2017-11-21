# Vue

Vue is a *library* that enables you to build a super-fast UI (a View) for your website or web application, using *components*. Vue is very similar to React, meaning that you still have to build your own application logic that sits behind the UI. You can extend Vue and React with routers or data stores, but you don't *have to*.

The main difference with Angular is that Angular provides you with a complete application *framework*, including a strict workflow that dictates how you should use it - the UI is only part of that. You might consider Angular a bit overkill if you need a simple front-end UI, especially considering its steep learning curve.

## Components

Web components isolate functionality in a single HTML element. Consider a simple single-page website with a basic layout. When using web components, your HTML might look like this:
```
<html>
    <navigation></navigation>
    <slideshow></slideshow>
    <testimonials></testimonials>
    <footer></footer>
</html>
```
Every component can contain its own HTML, CSS and Javascript! This is what a Vue component looks like:
```
<div>
    <p>This is the HTML of the component</p>
</div>
<script>
    // this is the code for the component
</script>
<css>
   p { /*this css applies to this component*/ }
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
