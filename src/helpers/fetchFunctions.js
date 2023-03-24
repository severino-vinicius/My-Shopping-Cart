const cartEndpoint = 'https://api.mercadolibre.com/items';

export const fetchProduct = async (productId) => {
  if (productId && productId.length > 0) {
    return fetch(`${cartEndpoint}/${productId}`)
      .then((response) => response.json())
      .then((data) => data);
  } throw new Error('ID não informado');
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
