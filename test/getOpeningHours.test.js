const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se ão for passado nenhum parãmetro pra função, retorna um objeto com cronograma do Zoo', () => {
    const cronograma = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(cronograma);
  });

  test('Testa se quando recebe "Monday" e "09:00-AM" , retorna a string: "The zoo is closed".', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  test('Testa se quando recebe "Tuesday" e "09:00-AM" , retorna a string: "The zoo is open".', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  test('Testa se quando recebe "Wesnesday" e "09:00-PM" , retorna a string: "The zoo is closed".', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  test('Se a função recebe "Tuesday, 09:60-AM" como parâmetro, deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59" ', () => {
    expect(getOpeningHours('Tuesday', '09:60-AM')).toThrowError();
  });

  test('Se a função recebe "Thu, 09:00-AM" como parâmetro, deve lançar uma exceção com a mensagem: "The day must be valid.Exemple: Monday".', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrowError();
  });

  test('Se a função recebe "Friday, 09:00-ZM" como parâmetro, deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'" ', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  test('Se a função recebe "Saturday, C9:00-AM" como parâmetro, deve lançar uma exceção com a mensagem: "The hour should represent a number" ', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  test('Se a função recebe "Saturday, 09:c0-AM" como parâmetro, deve lançar uma exceção com a mensagem: "The minutes should represent a number" ', () => {
    expect(getOpeningHours('Saturday', '09:c0-AM')).toThrow('The hour should represent a number');
  });
});
