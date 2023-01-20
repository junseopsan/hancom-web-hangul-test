/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Model {
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
     * 결과 값을 저장한다.
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

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
    constructor () {
        this.grid = this.getElement('#grid');
        this.result = 0;
    }

    /**
     * 돔 엘리먼트를 생성한다.
     * @param {element} tag
     * @param {string} id
     * @param {string} className
     * @returns element
     */
    createElement (tag, id, className) {
        const element = document.createElement(tag);
        if (id) element.id = id;
        if (className) {
            const classList = className.split(' ');
            element.classList.add(...classList);
        }
        return element;
    }

    /**
     * 돔 엘리먼트를 선택한다.
     * @param {element} selector
     * @returns
     */
    getElement (selector) {
        const element = document.querySelector(selector);
        return element;
    }

    /**
     * 계산기 외형 및 키패드를 셋팅.
     * @param {model} hancomData
     */
    makeHancomCalculate (hancomData) {
        hancomData.forEach(element => {
            const createElement = this.createElement(
                'button',
                element.id,
                element.className,
            );
            createElement.textContent = element.text;
            this.grid.append(createElement);
        });
    }

    /**
     * 푸쉬된 숫자에 클릭 이벤트를 할당하여 값을 콜백시킨다.
     * @param {string} handler
     */
    setInputNumber (handler) {
        this.grid.addEventListener('click', e => {
            if (e.target.id !== 'grid') handler(e.target.innerText);
        });
    }

    /*
     * 선택한 숫자를 계산기에 보여준다.
     * 12 자리를 넘어갔을때 폰트 사이즈를 조절한다.
     * @param {number} selectNumber
     */
    displayCalcValue (getValue) {
        if (getValue.toString().length > 12) {
            const resultBox = this.getElement('#result');
            resultBox.classList.add('font-180');
        }
        result.textContent = getValue;
    }
}

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class Controller {
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
        if (Number.isInteger(Number(value))) {
            if (!this.model.calcType) {
                this.model.setFirstValue(Number(this.model.firstValue + value));
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
        // 선택한 값으로 연산자를 실행시킨다.
        this.operatoer(value);
    };

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
                    break;
                case '-':
                    this.model.setResultValue(firstValue - secondValue);
                    this.model.setFirstValue(this.model.getResultValue());
                    break;
                case 'x':
                    this.model.setResultValue(firstValue * secondValue);
                    if (this.model.getResultValue() > 0)
                        this.model.setFirstValue(this.model.getResultValue());
                    break;
                case '÷':
                    if (
                        Number.isInteger(firstValue) &&
                        Number.isInteger(secondValue)
                    ) {
                        // 부동 소수점을 해결하기 위해서 math.js 라이브러리 사용.
                        const result = math.divide(firstValue, secondValue);
                        const numberCheckPattern = /[\-0-9\.]+/g;

                        if (numberCheckPattern.test(result)) {
                            this.model.setResultValue(result);
                            if (this.model.getResultValue() > -1) {
                                this.model.setFirstValue(
                                    this.model.getResultValue(),
                                );
                            }
                        }
                        if (result === Infinity) {
                            this.model.setResultValue('숫자 아님');
                        }
                    }
                    break;
            }
            // 새로운 값을 넣기 위해서 두번째 값을 0 으로 Set.
            this.model.setSecondValue(0);

            console.log(
                `${firstValue} ${calcType} ${secondValue} = ${this.model.getResultValue()}`,
            );

            // 두번째 값이 존재 할때 결과 값을 보여주도록 한다.
            if (secondValue != null) {
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

const app = new Controller(new Model(), new View());
