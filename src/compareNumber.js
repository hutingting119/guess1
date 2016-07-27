class CompareNumber {
    static judNumber(input, guess) {
        const inputs = input.split('');
        const guesses = guess.split('');
        const rightDigitCount = guesses.filter(c=>inputs.includes(c)).length;
        let a = guesses.filter(c=>inputs.indexOf(c) === guesses.indexOf(c)).length;
        let b = rightDigitCount - a;
        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;