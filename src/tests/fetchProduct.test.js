import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Verifica se fetchProduct é uma função', () => {
    const results = fetchProduct;
    expect(typeof results).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Verifica se ao passar fetchProduct sem paramentro retorna o erro "Termo de busca não informado" ', () => {
    expect(() =>  fetchProduct() ).toThrow(new Error('ID não informado'));
  });
});
