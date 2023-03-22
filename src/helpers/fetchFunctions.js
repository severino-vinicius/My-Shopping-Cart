export const fetchProduct = () => {
  // seu código aqui
};

const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProductsList = (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  return fetch(`${endpoint}${query}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

// console.log(fetchProductsList('computador'));
