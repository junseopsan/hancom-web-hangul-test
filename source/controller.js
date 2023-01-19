export default class Controller {
    constructor (model, view) {
        this.model = model;
        this.view = view;
        this.view.makeHancomCalculate(this.model.hancomData);
        this.view.setInputNumber(this.setCalcKeypad);
    }

    /**
     * 'C' 일때 모든 값을 0 으로 초기화
     * @returns ''
     */
    clearValues = () => {
        this.model.setFirstValue(0);
        this.model.setSecondValue(0);
        this.view.displayCalcValue(0);
        return '';
    };

    /**
     * 키패드로 전달된 값을 연산자 여부에 따라서 첫번째, 두번째 값으로 셋팅한다.
     *
     * @param {string} value
     */
    viewCalcValue = value => {
        this.operatoer(value);
        if (Number.isInteger(Number(value))) {
            // firstValue
            if (!this.model.calcType) {
                console.log('first');
                this.model.setFirstValue(Number(this.model.firstValue + value));
                this.view.displayCalcValue(this.model.firstValue);
                return;
            }
            // secondValue
            if (this.model.calcType) {
                console.log('second');
                this.model.setSecondValue(
                    Number(this.model.secondValue + value),
                );
                this.view.displayCalcValue(this.model.secondValue);
                return;
            }
        }
    };

    /**
     * 사칙연산 연산을 구분한다.
     */
    operatoer = value => {
        const character = ['+', '-', '÷', '=', 'x'];
        if (character.includes(value)) {
            this.model.calcType = value;
            const firstValue = this.model.firstValue;
            const secondValue = this.model.secondValue;
            const calcType = this.model.calcType;

            switch (calcType) {
                case '+':
                    // 첫번째getFirstValue 두번째 더한값을 결과 값에 Set.
                    this.model.setResultValue(firstValue + secondValue);
                    // 결과 값을 첫번째 값에 Set.
                    this.model.setFirstValue(this.model.getResultValue());
                    // 두번째 값을 0 으로 Set.
                    this.model.setSecondValue(0);

                    this.view.displayCalcValue(this.model.getResultValue());
                    break;
                default:
                    break;
            }

            console.log(
                `${firstValue} ${calcType} ${secondValue} = ${this.model.getResultValue()}`,
            );
        }
    };

    /**
     * 클릭 이벤트로 리턴된 값을 결과 값에 보여준다.
     * @param {string} value
     */
    setCalcKeypad = value => {
        if (value === 'C') this.clearValues();
        this.viewCalcValue(value);
    };

    /**
     * 값을 입력한다.
     * @param {string} value
     */
    doCalculate = () => {};
}

// 사칙연산 기본적으로
// 부동소수점 : 0.1 / ....
//
