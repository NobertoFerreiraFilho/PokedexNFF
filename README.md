
<img src='https://github.com/NobertoFerreiraFilho/PokedexNFF/blob/master/src/image/NavBar.jpg'/>

# Pokedex with React Js

<img src='https://github.com/NobertoFerreiraFilho/PokedexNFF/blob/master/src/image/Pokedex-Homepage.gif' width=356/> <img src='https://github.com/NobertoFerreiraFilho/PokedexNFF/blob/master/src/image/Pokedex-DetailsPage.gif' width=450/>

This project was created by Noberto Ferreira Filho with [Create React App](https://github.com/facebook/create-react-app).

That's a responsive Pokedex Web Application using **ReactJs**. This project was created in order to practice several programming skills and technics.

<p align='center'>
<img src="https://img.shields.io/static/v1?label=ReactJs&message=framework&color=blue&logo=REACT"/>
<img src='https://api.netlify.com/api/v1/badges/0d208651-2136-4eb5-8315-be33c0f392ed/deploy-status'>
<img src='https://img.shields.io/static/v1?label=Status&message=DONE&color=brightgreen'>
<img src='https://img.shields.io/github/stars/NobertoFerreiraFilho/PokedexNFF'>
<img src='https://img.shields.io/github/forks/NobertoFerreiraFilho/PokedexNFF'>
<img src='https://img.shields.io/github/issues/NobertoFerreiraFilho/PokedexNFF'>
</p>

---

## :hammer: Application Features

### 1st PAGE: HomePage:

<img src='https://github.com/NobertoFerreiraFilho/PokedexNFF/blob/master/src/image/Homepage.jpg' Width='550'/>

>#### :hammer: Homepage Features
>
>1. Grid + Pagination + itens per page selection
>2. Search Bar that reloads the Grid every typed letter and erases when the input is empty.
>3. A Type filter bar that reloads the Grid with all pokemon of the chosen type in only 1 page + Reset filter button
>4. A Sticky NavBar with:
>    - Go to the Top + Go to the Bottom Buttons
>    - External Link to Githubs page.
>
### MODAL Card:

<img src='https://github.com/NobertoFerreiraFilho/PokedexNFF/blob/master/src/image/Modal(homepage).jpg' width='550'/>

>#### :hammer: Modal Features
>
>1. MODAL Card with more details of the chosen Pokemon opened by >clicking on the small cards of the grid
>2. Link to the MORE DETAILS page.
>
### 2nd PAGE:

<img src='https://github.com/NobertoFerreiraFilho/PokedexNFF/blob/master/src/image/DetailsPage.jpg' width='550'/>

>#### :hammer: Details Page Features
>
>1. Image with selection (3 options)
>2. Text description of the pokemon with all the text options available in the API, selected by the arrow pagination button
>3. Several details Tabels from diferents API url.
>4. Evolution Chain Grid + reload the page with the new chosen pokemon details by clicking on one of the small card at the bottom.
>5. A pagination that reloads the page with the next pokemon on the list using its ID.
>6. A Sticky NavBar with:
>       - Logo with link to the Homepage
>       - Go to the Top + Go to the Bottom Buttons
>       - External Link to Githubs page.

---

## Technics, Technologies and Dependences used:

<ul style='display:flex; flex-wrap: wrap; justify-content:center;'>
<il>
<code style='background-color: gray; color:white; width:170px; border-radius: 10px; text-align:center; margin-left:1px'>React Js</code>
</il>
<il>
<code style='background-color: gray; color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>CSS3 / HTML5</code>
</il>
<il>
<code style='background-color: gray; color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>GitHub</code>
</il>
</ul>

<ul style='display:flex; flex-wrap: wrap; justify-content:center;'>
<il>
<code style='background-color: rgba(30,30,30, 1); color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>CI/CD</code>
</il>
<il>
<code style='background-color: rgba(30,30,30, 1); color:white; width:295px; border-radius: 10px; text-align:center;margin-left:4px'>Functional components: Arrow function</code>
</il>
<il>
<code style='background-color: rgba(30,30,30, 1); color:white; width:295px; border-radius: 10px; text-align:center;margin-left:4px'>JSX syntax</code>
</il>
<il>
<code style='background-color: rgba(30,30,30, 1); color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>Flexbox</code>
</il>
<il>
<code style='background-color: rgba(30,30,30, 1); color:white; width:180px; border-radius: 10px; text-align:center;margin-left:4px'>Conditional Rendering</code>
</il>
</ul>

<ul style='display:flex; flex-wrap: wrap; justify-content:center;'>
<il>
<code style='background-color: rgba(30,30,130, 1); color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>Styled-Components</code>
</il>
<il>
<code style='background-color: rgba(30,30,130, 1); color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>Font-Awesome</code>
</il>
<il>
<code style='background-color: rgba(30,30,130, 1); color:white; width:170px; border-radius: 10px; text-align:center;margin-left:4px'>React-Router</code>
</il>
<il>
<code style='background-color: rgba(30,30,130, 1); color:white; width:180px; border-radius: 10px; text-align:center;margin-left:4px'>API consuming: Axios</code>
</il>
<il>
<code style='background-color: rgba(30,30,130, 1); color:white; width:180px; border-radius: 10px; text-align:center;margin-left:4px'>API consuming: Fetch</code>
</il>
</ul>

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
