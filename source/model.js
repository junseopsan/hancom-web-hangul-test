export default class Model {
    constructor () {}
    setLocalStorage () {
        localStorage.setItem('hancom', this.data);
    }
    /**
     * 선택한 숫자를 입력한다.
     * @param {number} selectNumber
     */
    inputNumber (selectNumber) {}

    /**
     * 나눗셈 연산을 실행한다.
     */
    setDivision () {}

    /**
     * 곱하기 연산을 실행한다.
     */
    setMultiply () {}

    /**
     * 뺼셈 연산을 실행한다.
     */
    setMinus () {}

    /**
     * 덧셈 연산을 실행한다.
     */
    setPlus () {}

    /**
     * 계산을 실행한다.
     */
    calculate () {}

    /**
     * 계산을 초기화 한다.
     */
    calculate () {}
}
