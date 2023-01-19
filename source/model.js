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
        this.secondValue = null;
        this.calcType = null;
    }

    /**
     * 결과 값을 저장한다..
     * @param {number} value
     */
    setResultValue (value) {
        this.resultValue = value;
    }

    /**
     * 결과 값을 호출한다.
     * @returns resultValue
     */
    getResultValue () {
        return this.resultValue;
    }
    /**
     * 첫번째 값을 저장한다.
     * @param {number} value
     */
    setFirstValue (value) {
        this.firstValue = value;
    }

    /**
     * 첫번째 값을 호출한다.
     * @returns firstValue
     */
    getFirstValue () {
        return this.firstValue;
    }
    /**
     * 두번째 값을 저장한다.
     * @param {number} value
     */
    setSecondValue (value) {
        this.secondValue = value;
    }
    /**
     * 두번째 값을 호출한다.
     * @returns firstValue
     */
    getSecondValue () {
        return this.secondValue;
    }
    /**
     * 연산 타입 값을 저장한다.
     * @param {string} value
     */
    setCalcType (value) {
        this.calcType = value;
    }
    /**
     * 연산 타입 값을 호출한다.
     * @returns calcType
     */
    getCalcType () {
        return this.calcType;
    }
}
