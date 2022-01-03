const Soma = require('./Soma');

describe('Testando a nova função soma', () => {
    it('A soma deve dar 3', () => {
        const res = Soma.Soma(2, 1);
        expect(res).toBe(3);
    });
});