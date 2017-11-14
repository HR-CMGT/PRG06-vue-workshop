# Vue Startproject

This is an empty [Vue](https://vuejs.org) start project, configured to use:

- Single file .vue templates
- Webpack
- Class syntax
- Typescript

After installing and checking if everything runs, you can continue with workshop 1 and workshop 2!

## Contents

- Installing
- Running webpack
- Working with modules
- Types for JSON data
- Configuration files

## Installing tools

First install [Visual Studio Code](https://code.visualstudio.com) with the [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 

Make sure you have installed [NodeJS](https://nodejs.org/en/), and read [this introduction](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) if you are unfamiliar with npm.

Install [Typescript](https://www.typescriptlang.org) and [Webpack](https://webpack.js.org) globally:

```
sudo npm install -g typescript webpack
```
For debugging, you can install the [Chrome Vue Developer tool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).

## Installing the project

Open a terminal in your projects folder. Clone this repository, install dependencies, and open VS Code
```
git clone https://github.com/HR-CMGT/vue-starter.git
cd vue-starter
npm install
code .
```

## Running webpack

Open VS Code's integrated terminal and type:
```
webpack
```
This command creates a `bundle.js` file in your `dist` folder, generated from your .vue typescript files. If you type `webpack --watch` the bundle is created automatically after every change in your code

## Viewing the project

You have to view your project on a local server: `http://localhost/`. If you don't have a localhost server, you can use webpack dev server - this also automatically refreshes the browser after any change!
```
sudo npm install webpack-dev-server -g
webpack-dev-server
```

## Working with modules

Since this project uses webpack, you can use modules for all your code, not just `.vue` templates:

**test.ts**
```
export default class Test {
    doSomething(){
        console.log("hello test")
    }
}
```
**app.vue**
```
import Test from "./test"
export default class App extends Vue {
    created() {
        let t = new Test()
        t.doSomething()
    }
}
```

## Types for JSON data

`types.d.ts` contains type definitions. You can use this file to get type checking for any external data or libraries. Included is an example for using JSON data from "https://swapi.co/api/people/1/"

## Files

- **tsconfig.json** This file decides how your typescript files should be interpreted
- **webpack.config.js** This file is used by webpack to compose html, css and javascript from .vue files that use typescript.
- **package.json** Contains dependencies. You don't need to push `node_modules` to github.
- **types.d.ts** This makes sure that VS Code understands the `.vue` file type. You can put your own type declarations in here as well.
