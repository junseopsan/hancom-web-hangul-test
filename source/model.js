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
            { id: 'c', text: 'C', className: 'box orangeBox' },
            { id: 'equal', text: '=', className: 'box grayBox' },
            { id: 'plus', text: '+', className: 'box grayBox' },
        ];
        this.resultValue = 0;
        this.firstValue = 0;
        this.secondValue = 0;
        this.calcType = null;
    }
    /**
     * 입력한 값을 전달한다.
     * @param {string} value
     */
    setResultValue (value) {
        this.resultValue = value;
    }

    getResultValue () {
        return this.resultValue;
    }

    setFirstValue (value) {
        this.firstValue = value;
    }

    getFirstValue () {
        return this.firstValue;
    }

    setSecondValue (value) {
        this.secondValue = value;
    }

    getSecondValue () {
        return this.secondValue;
    }
}
