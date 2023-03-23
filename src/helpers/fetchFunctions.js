const cartEndpoint = 'https://api.mercadolibre.com/items/';

export const fetchProduct = (productId) => {
  if (!productId) {
    throw new Error('ID não informado');
  }
  return fetch(`${cartEndpoint}${productId}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const errorMensage = 'Algum erro ocorreu, recarregue a página e tente novamente';

export const fetchProductsList = (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  return fetch(`${endpoint}${query}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

// console.log(await fetchProductsList('computador'));
