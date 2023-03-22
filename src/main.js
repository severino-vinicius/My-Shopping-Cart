import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');
const getProducts = await fetchProductsList('computador');

const listOfItens = () => getProducts
  .forEach((element) => products.appendChild(createProductElement({
    id: element.id,
    title: element.title,
    thumbnail: element.thumbnail,
    price: element.price,
  })));

listOfItens();
