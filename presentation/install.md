# Installing tools

After installing and checking if everything runs, you can continue with [workshop part 1](README.md) and [part 2](workshop2.md)!

## Contents

- Tools
- Using Webpack
- Working with modules
- Types for JSON data
- Configuration files

## Tools

First install [Visual Studio Code](https://code.visualstudio.com). To get code completion in Single File Components, install the [Vetur extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur) 

Make sure you have installed [NodeJS](https://nodejs.org/en/), and read [this introduction](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) if you are unfamiliar with npm.

Install [Typescript](https://www.typescriptlang.org) and [Webpack](https://webpack.js.org) **globally**

```
sudo npm install -g typescript webpack
```
For debugging Vue components, install the [Chrome Vue Developer tool](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd).

## Installing the workshop files

Open a terminal in your projects folder. Clone this repository, install dependencies, and open VS Code. If you are unfamiliar with git, you can do this [short exercise](https://try.github.io/levels/1/challenges/1). 
```
git clone https://github.com/HR-CMGT/vue-workshop.git
cd vue-workshop
npm install
code .
```

To enable the `code .` shortcut, launch VS Code. Now open the Command Palette (F1) and type `shell command` to find the Shell Command: `Install 'code' command in PATH command`. Restart your terminal.

*Note : You can remove the `.git` directory from the project folder: `rm -rf .git`.`*

## Using webpack

Webpack's [config file](./webpack.config.js) is set up to interpret `.vue` files that use Typescript. Try if webpack runs correctly in the terminal:
```
webpack
```
This should create a `build.js` file in your `dist` folder, generated from your .vue typescript files. If you type `webpack --watch` the bundle is created automatically after every change in your code.

## Viewing the project

You have to view your project on a local server: `http://localhost/`. If you don't have a localhost server, you can use [webpack dev server](https://www.npmjs.com/package/webpack-dev-server) - this is super handy because it automatically refreshes the browser after you update your code!
```
sudo npm install webpack-dev-server -g
webpack-dev-server
```

## Files

- **tsconfig.json** This file decides how your typescript files should be interpreted
- **webpack.config.js** This file is used by webpack to compose html, css and javascript from .vue files that use typescript.
- **package.json** Contains dependencies. You don't need to push `node_modules` to github.
- **vue-shim.d.ts** This makes sure that VS Code understands the `.vue` file type. You can put your own type declarations in here as well.
