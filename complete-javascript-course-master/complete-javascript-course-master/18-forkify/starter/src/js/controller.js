import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable'; // for polyfilling everything else
import 'regenerator-runtime/runtime'; //for polyfilling async/await

// console.log(icons);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// not js, coming from parcel
if (module.hot) {
  module.hot.accept();
}

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

  // controlServings();
}


//Event Handlers in MVC: Publisher-Subscriber Pattern
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);


// ['hashchange', 'load'].forEach(ev => {
//   window.addEventListener(ev, controlRecipes);
// });


const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    console.log(resultsView); 
    // 1) Get Search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    // 3) Render results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  }
  catch (err) {
    console.log(err);
  }
}

const controlPagination = function (goToPage) {
  // console.log(`Pagination Controller`);

  // 1) Render New Results
  resultsView.render(model.getSearchResultsPage(goToPage));
  
  // 2) Render New Pagination Buttons
  paginationView.render(model.state.search);
}

// controlSearchResults();


const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view

  // 2) Rendering recipe
  recipeView.render(model.state.recipe);

}


const init = function () {
  // we just implemented Publisher-Subscriber Pattern.
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}

init();