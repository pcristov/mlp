# Test project for FE position at MullenLowe Profero China

## Table of Contents
1. [Description](#description)
2. [Page’s expected behavior](#pages-expected-behavior)
3. [ReactJS/VueJS](#reactjsvuejs)
4. [CSS](#css)
5. [Git](#git)
6. [Available Scripts](#available-scripts)

### Description

The task requires to develop a slider from scratch. You cannot re-use any existing slider however you are free to choose the ReactJs/VueJs framework you want to work with.

Images will be loaded from a public api. If you do not know any, you can this is one: [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos)

### Page’s expected behavior

* You will implement this design for an iPhone 6/7/8 Plus.
* At initial loading, the page will display loading message.
* The graph will be done in CSS only. The burger menu will contain three dummy links.
* The slider will load 6 images asynchronously. You can either load them all at once or implement lazy loading. Each image *will display a loading icon if they are not loaded yet when then component is being rendered.
* When you click on the slider’s arrow, animation will be triggered by updating your custom `data-attributes.

### ReactJS/VueJS

* There should be no error message in the console.
* You will set up and use a linter with the standard you prefer.

### CSS

You will follow the BEM standard for your stylesheet. You can use css, scss, sass, less… whatever you are comfortable with.

### Git

The quality of your commits will be evaluated. Please make Readable commit as if you were working on a real project. You will also be evaluated on how you manage your branches.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.