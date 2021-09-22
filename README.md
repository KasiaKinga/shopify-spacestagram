# Spacestagram: Image-sharing from the final frontier

This is a solution to the Shopify take-home challenge which is the webpage that displays space images using NASA API, and allow the user to “like” and “unlike” their favourite images.

## Table of contents

- [Spacestagram: Image-sharing from the final frontier](#spacestagram-image-sharing-from-the-final-frontier)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Users are able to:](#users-are-able-to)
  - [Getting Started](#getting-started)
    - [Executing Program](#executing-program)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
  - [Useful Links](#useful-links)

## Overview

### Users are able to:

- [x] See the space images with title and date
- [x] Like and unlike the images
- [x] Use assistive tools like screen reader to access and read the content

## Getting Started

### Executing Program

- To test this app locally, fork and clone this repo
- Install all dependencies by running: `npm install`
- Start the app by running: `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [React Grid library](https://tsuyoshiwada.github.io/react-stack-grid/#/)
- [Semenatic UI React](https://react.semantic-ui.com/) - For styles

### What I learned

- Enhancing accessibility by using semantic HTML and ARIA attributes, for example the code below will instruct the user which image they like/unlike

```
<button
  aria-label={`Like ${image.title}`}
  onClick={...}
  >
  <Icon
    aria-hidden="true"
    name={isLiked ? "heart" : "heart outline"}
    size="big"
    color={isLiked ? "red" : "grey"}
    heart
  />
</button>
```

## Author

- [Kasia Gierat](https://www.linkedin.com/in/kasia-gierat/)


## Useful Links

- [THE A11Y PROJECT](https://www.a11yproject.com/checklist/)
- [Semantic UI React](https://react.semantic-ui.com/)
- [React Grid library](https://tsuyoshiwada.github.io/react-stack-grid/#/)
