export default class Model {
    constructor () {
        this.hancomData = [
            { id: 'result', text: '0', className: 'viewBox grayBox' },
            { id: 'seven', text: '7', className: 'box' },
            { id: 'eight', text: '8', className: 'box' },
            { id: 'nine', text: '9', className: 'box' },
            { id: 'division', text: '÷', className: 'box grayBox' },
            { id: 'four', text: '4', className: 'box' },
            { id: 'five', text: '5', className: 'box' },
            { id: 'six', text: '6', className: 'box' },
            { id: 'multiply', text: 'x', className: 'box grayBox' },
            { id: 'one', text: '1', className: 'box' },
            { id: 'two', text: '2', className: 'box' },
            { id: 'three', text: '3', className: 'box' },
            { id: 'minus', text: '-', className: 'box grayBox' },
            { id: 'zero', text: '0', className: 'box' },
            { id: 'c', text: 'c', className: 'box orangeBox' },
            { id: 'equal', text: '=', className: 'box grayBox' },
            { id: 'plus', text: '+', className: 'box grayBox' },
        ];
        this.result = 0;
        this.firstValue = 0;
        this.secondValue = 0;
        this.secondValue = 0;
        this.calculateType = null;
    }
    /**
     * 입력한 값을 전달한다.
     * @param {string} value
     */
    setResult (callback) {
        this.handleInputNumber = callback;
        this.firstValue = callback;
    }
    /**
     * 나눗셈 연산을 실행한다.
     */
    calculateDivision () {
        this.result = this.firstValue / this.secondValue;
    }

    /**
     * 곱하기 연산을 실행한다.
     */
    calculateMultiply () {
        this.result = this.firstValue * this.secondValue;
    }

    /**
     * 뺼셈 연산을 실행한다.
     */
    calculateMinus () {
        this.result = this.firstValue - this.secondValue;
    }

    /**
     * 덧셈 연산을 실행한다.
     */
    calculatePlus () {
        this.result = this.firstValue + this.secondValue;
    }
}
