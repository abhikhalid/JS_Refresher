import View from "./view";
//import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2
import previewView from "./previewView";

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query! Please try again! ;)`;
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    // return this._data.map(result => this._generateMarkupPreview(result)).join('');
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();