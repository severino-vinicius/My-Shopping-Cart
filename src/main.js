import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, errorMensage, fetchProduct } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement,
  handlePriceOfItens } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = document.querySelector('.products');

const loading = document.querySelector('.loading');

const removeLoading = () => {
  loading.remove();
};

const listOfItens = async () => {
  try {
    const getProducts = await fetchProductsList('computador');
    getProducts.forEach((element) => products.appendChild(createProductElement({
      id: element.id,
      title: element.title,
      thumbnail: element.thumbnail,
      price: element.price,
    })));
  } catch {
    removeLoading();
    const p = document.createElement('p');
    p.className = 'error';
    p.innerHTML = errorMensage;
    products.appendChild(p);
  }
};

await listOfItens();
removeLoading();

const productIds = getSavedCartIDs();

const creatMyOldCart = async () => {
  const handleProductIds = productIds.map(async (id) => fetchProduct(id));
  const resultPromiseAll = await Promise.all(handleProductIds);
  resultPromiseAll.forEach(({ id, title, price, pictures }) => {
    const myCart = document.querySelector('.cart__products');
    myCart.appendChild(createCartProductElement({ id, title, price, pictures }));
    myCart.addEventListener('click', () => {
      handlePriceOfItens();
    });
  });
};

creatMyOldCart();
handlePriceOfItens();
