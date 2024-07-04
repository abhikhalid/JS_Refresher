import View from "./view";
//import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
    _parentElement = document.querySelector('.upload');

    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    constructor() {
        super(); //since it's a  child class
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }

    // _addHandlerShowWindow() {
    //     this._btnOpen.addEventListener('click', function () {
    //         this._overlay.classList.toggle('hidden');
    //         this._window.classList.toggle('hidden');
    //     f})
    // }

    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }

    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }

    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function (e) {
            e.preventDefault(); 
            //browser api
            const dataArr = [...new FormData(this)]; // this -> this._parentElement (Upload form)
            const data = Object.fromEntries(dataArr); // this method takes an array of entries and converts to an object
            handler(data);
        });
    }

    _generateMarkup() {

    }
}

export default new AddRecipeView();