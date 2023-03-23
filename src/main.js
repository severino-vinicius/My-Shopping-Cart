import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, errorMensage } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');
const getProducts = await fetchProductsList('computador');

const loading = document.querySelector('.loading');

const removeLoading = () => {
  loading.remove();
};

// const mensageErrorP = document.querySelector('#placeholder-error');

const listOfItens = () => {
  if (getProducts === errorMensage) {
    removeLoading();
    const p = document.createElement('p');
    p.className = 'error';
    p.innerHTML = errorMensage;
    products.appendChild(p);
  } else {
    getProducts.forEach((element) => products.appendChild(createProductElement({
      id: element.id,
      title: element.title,
      thumbnail: element.thumbnail,
      price: element.price,
    })));
  }
};

await listOfItens();
removeLoading();
