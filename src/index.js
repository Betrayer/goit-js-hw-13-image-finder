import './styles.css';
import pixApi from './api/apiService';
import imgTemplate from './templates/card.hbs';
const container = document.querySelector('.container');
const button = document.querySelector('.load-more');
const input = document.querySelector('input');
const search = document.querySelector('#search-form');
let currentPage = 0;

button.addEventListener('click', loadOnClick);
search.addEventListener('keypress', loadInputValue);

function parseData(data) {
  const containerPoint = imgTemplate(data);
  container.insertAdjacentHTML('beforeend', containerPoint);
}

function loadOnClick() {
  pixApi(input.value, ++currentPage, parseData);
}

function loadInputValue() {
  if (event.key === 'Enter') {
    event.preventDefault();
    container.innerHTML = '';
    loadOnClick();
  }
}
