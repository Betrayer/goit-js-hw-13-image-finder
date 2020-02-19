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
  console.log(data);
  const rez = imgTemplate(data);
  container.innerHTML += rez;
  button.removeAttribute('disabled');
  let images = 0;
}

function loadOnClick(event) {
  pixApi(search.value, ++currentPage, parseData);
}

function loadInputValue(event) {
  if (event.key === 'Enter') {
    console.log('GO AWAY');
    loadOnClick(event);
  }
}

// pixApi(search.value, ++currentPage, parseData);
