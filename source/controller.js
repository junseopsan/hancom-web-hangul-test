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
        this.model.setSecondValue(null);
        this.view.displayCalcValue(0);
        this.model.setCalcType(null);
        return '';
    };

    /**
     * 키패드로 전달된 값을 연산자 여부에 따라서 첫번째, 두번째 값으로 셋팅한다.
     *
     * @param {string} value
     */
    viewCalcValue = value => {
        console.log(value);
        if (Number.isInteger(Number(value))) {
            if (!this.model.calcType) {
                this.model.setFirstValue(Number(this.model.firstValue + value));
                console.log(this.model.firstValue);
                this.view.displayCalcValue(this.model.firstValue);
                return;
            }
            if (this.model.calcType) {
                this.model.setSecondValue(
                    Number(this.model.secondValue + value),
                );
                this.view.displayCalcValue(this.model.secondValue);
                return;
            }
        }
        // 찻반쩨 깂 얀신지 두번째
        this.operatoer(value);
        // if (!this.isNull(this.model.getSecondValue())) {
        // }
    };

    isNull (value) {
        return typeof value != 'undefined' && value != null && value != ''
            ? false
            : true;
    }

    /**
     * 사칙연산 연산을 구분한다.
     */
    operatoer = type => {
        const character = ['+', '-', '÷', 'x', '='];

        if (character.includes(type)) {
            if (type !== '=') this.model.calcType = type;

            let firstValue = this.model.getFirstValue();
            let secondValue = this.model.getSecondValue();
            const calcType = this.model.calcType;

            switch (calcType) {
                case '+':
                    // 첫번째getFirstValue 두번째 더한값을 결과 값에 Set.
                    this.model.setResultValue(firstValue + secondValue);
                    // 첫번째 결과 값에 새로운 값을 연산하기 위해 결과 값을 첫번째 값에 Set.
                    this.model.setFirstValue(this.model.getResultValue());
                    // 새로운 값을 넣기 위해서 두번째 값을 0 으로 Set.
                    // this.model.setSecondValue(0);
                    break;
                case '-':
                    this.model.setResultValue(firstValue - secondValue);
                    this.model.setFirstValue(this.model.getResultValue());
                    // this.model.setSecondValue(0);
                    break;
                case 'x':
                    this.model.setResultValue(firstValue * secondValue);
                    if (this.model.getResultValue() > 0)
                        this.model.setFirstValue(this.model.getResultValue());
                    // this.model.setSecondValue(0);
                    break;
            }
            // 새로운 값을 넣기 위해서 두번째 값을 0 으로 Set.
            this.model.setSecondValue(0);

            console.log(
                `${firstValue} ${calcType} ${secondValue} = ${this.model.getResultValue()}`,
            );

            if (!this.isNull(secondValue)) {
                this.view.displayCalcValue('');
                setTimeout(() => {
                    this.view.displayCalcValue(this.model.getResultValue());
                }, 100);
            }
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
}

// 사칙연산 기본적으로
// 부동소수점 : 0.1 / ....
//
