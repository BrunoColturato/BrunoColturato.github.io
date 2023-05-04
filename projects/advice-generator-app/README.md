# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

The challenge is to build out a device generator app using the [Advice Slip API](https://api.adviceslip.com/).

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./extra/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- [Advice Slip JSON API](https://api.adviceslip.com/)

### What I learned
I learned that Firefox can cache data obtained from the API. In this current app, this was a bad thing, so I had to set the "no-cache" option on `fetch`.

```js
const APIResponse = await fetch(
  "https://api.adviceslip.com/advice", 
  {cache: "no-cache"}
);
```

## Author

- Website - [Bruno Alvarenga Colturato](https://brunocolturato.github.io)
- Frontend Mentor - [@BrunoColturato](https://www.frontendmentor.io/profile/BrunoColturato)