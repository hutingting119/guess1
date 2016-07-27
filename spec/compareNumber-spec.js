const compareNumber = require('../src/compareNumber');

describe('compareNumber', ()=> {
    const input = '1234';
    it('should judge number', ()=> {
        [
            {
                number: '1234',
                expectResult: '4A0B'
            },
            {
                number: '4321',
                expectResult: '0A4B'
            },
            {
                number: '5678',
                expectResult: '0A0B'
            }
        ].forEach(item=> {
            expect(compareNumber.judNumber(input, item.number)).toEqual(item.expectResult);
        })
    })
})