import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable'; // for polyfilling everything else
import 'regenerator-runtime/runtime'; //for polyfilling async/await

// console.log(icons);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1. Loading Recipe
    await model.loadRecipe(id); //async function return a promise

    const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new RecipeView(model.state.recipe);

  }
  catch (err) {
    // alert(err);
    recipeView.renderError();
  }
}


//Event Handlers in MVC: Publisher-Subscriber Pattern
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);


// ['hashchange', 'load'].forEach(ev => {
//   window.addEventListener(ev, controlRecipes);
// });


const controlSearchResults = async function () {
  try {
    // 1) Get Search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    // 3) Render results
    console.log(model.state.search.results);
  }
  catch (err) {
    console.log(err);
  }
}

// controlSearchResults();


const init = function () {
  // we just implemented Publisher-Subscriber Pattern.
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();