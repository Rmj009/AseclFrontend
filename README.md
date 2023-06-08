## Course Synopsis

This course teaches the fundamentals of Vue 3 by building an actual web application for managing a list of users stored in a database:

![Alt text](/src/assets/vue_crud_website_screenshot.png?raw=true "Vue CRUD Example")

## Website

[Vue User Management Website](https://objective-panini-46afa2.netlify.app)

## Description

This tutorial teaches you about Vue 3 by building a website that manages a list of users. This type of site is called a CRUD (Create, Read, Update, and Delete) application, as it provides the key functionality for interacting with a database.

## Technology

This course utilizes the following:

* [Vue 3](https://vuejs.org) with the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
* [Vue Build Tools](https://vuejs.org/guide/scaling-up/tooling.html) using [Vite](https://vitejs.dev)
* [Vitest](https://vitest.dev)
* [Vue Test Utils](https://test-utils.vuejs.org/guide/)
* [Pinia](https://pinia.vuejs.org)
* [Vue Router](https://router.vuejs.org)

## Chapters

**Part I (Vue Fundamentals)**
* Chapter 1 - Introduction to VueJS
* Chapter 2 - Changelog
* Chapter 3 - Initial Website
* Chapter 4 - Getting Started with VueJS
* Chapter 5 - Displaying Lists with the `v-for` Directive
* Chapter 6 - Using the `v-on` and `v-show` Directives
* Chapter 7 - Using the `v-if` and `v-else` Directives
* Chapter 8 - Introduction to Methods
* Chapter 9 - Methods (Part II)
* Chapter 10 - Computed Properties
* Chapter 11 - Style Binding

**Part II (Components)**
* Chapter 12 - Introduction to Components
* Chapter 13 - Vue Build Tools
* Chapter 14 - Components (Part II)
* Chapter 15 - Unit Testing
* Chapter 16 - Props
* Chapter 17 - Slots
* Chapter 18 - Components (Part III)
* Chapter 19 - Custom Events
* Chapter 20 - Unit Testing (Part II)

**Part III (Working with an API)**
* Chapter 21 - Vue Lifecyle
* Chapter 22 - TDD: Loading data via GET
* Chapter 23 - TDD: Message Banner
* Chapter 24 - TDD: Saving data via POST
* Chapter 25 - TDD: Deleting data via DELETE
* Chapter 26 - TDD: Updating data via PUT

**Part IV (Vue Router and Vuex)**
* Chapter 27 - Pinia (Part I)
* Chapter 28 - Pinia (Part II)
* Chapter 29 - Vue Router
* Chapter 30 - Deploying to Netlify
* Chapter 31 - Conclusion

## Project Setup

```sh
$ git clone git@gitlab.com:patkennedy79/vue-crud-course-code.git
$ cd vue-crud-course-code
$ npm install
```

### Compile and Hot-Reload for Development

```sh
$ npm run dev
```

### Compile and Minify for Production

```sh
$ npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
$ npm run test:unit
```

### Test Coverage

```sh
$ npm run test:coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
$ npm run lint
```

## Additional Resources

Vue Documentation: [https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)
