const answerGenrator = require('../src/answerGenrator');

describe('Answer Generatot', ()=> {

    it('should generate answer', ()=> {
        const isUnique = (item, index, array)=> {
            return array.lastIndexOf(item) === index;
        };
        const answer = answerGenrator.answer();

        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy();
        expect(answerGenrator.answer()).not.toEqual(answerGenrator.answer());
    })
})