import './styles.css';
import pixApi from './api/apiService';
import imgTemplate from './templates/card.hbs';
const container = document.querySelector('.container');
const button = document.querySelector('.load-more');
const search = document.querySelector('input');
let currentPage = 0;

button.addEventListener('click', loadOnClick);
search.addEventListener('keypress', loadInputValue);

function parseData(data) {
  const containerPoint = imgTemplate(data);
  container.innerHTML += containerPoint;
}

function loadOnClick(event) {
  pixApi(search.value, ++currentPage, parseData);
}

function loadInputValue(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    container.innerHTML = '';
    loadOnClick(event);
  }
}
