const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Se nenhum parâmetro for passado, a função deve retornar "Undefined" como output', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('Se for passado "algum valor diferente de string" como parâmetro, retorna a um error, alertando que será aceito apenas strings', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Se for passado "count" como parâmetro, a função deve retornar 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  test('Se for passado "names" como parâmetro,retorna um array com nomes de todos os elefates', () => {
    const nameElephant = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(nameElephant);
  });

  test('Se for passado "averageAge" como parâmetro,retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  test('Se for passado "popularity" como parâmetro, retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  test('Se for passado "availability" como parâmetro, retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const openWeek = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(openWeek);
  });

  test('Se for passado "um numero ou uma letra " como parâmetro, retorna "null" .', () => {
    expect(handlerElephants(1)).toBeNull();
  });
});
