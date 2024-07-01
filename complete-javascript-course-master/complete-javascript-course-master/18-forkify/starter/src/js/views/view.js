//import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
    _data;

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        // if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDom = document.createRange().createContextualFragment(newMarkup); //convert string to Real DOM Node Objects, so basically newDom will become like a big object, which is like a virtual DOM. DOM that is not really living on the page but which lives in our memory. Now we can now use that DOM as if it was the real DOM on our page.
        const newElements = Array.from(newDom.querySelectorAll('*'));
        //console.log(newElements);
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));

            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() != '') {
                // console.log(newEl.isEqualNode(curEl));
                // console.log('curEl', curEl);
                // console.log('newEl', newEl);
                // console.log('newEl', newEl.firstChild);
                // console.log('💥', newEl.firstChild.nodeValue.trim());
                curEl.textContent = newEl.textContent;
            }

            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));   
            }
        });
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const markup =
            `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;

        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }


    renderMessage(message = this._errorMessage) {
        const markup = `
            <div class="message">
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}