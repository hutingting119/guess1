class AnswerGenrator {
    static answer() {
        let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        let puts = [];

        for (let i = 0; i < 4; i++) {
            const randomnumber = parseInt(Math.random() * inputs.length);
            puts.push((inputs.splice(randomnumber, 1))[0]);
        }
        return puts;
    }
}

module.exports = AnswerGenrator;