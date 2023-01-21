/**
 * @class Model
 *
 */
class Model {
    constructor () {
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
        this.result = 0;
    }

    /**
     * 돔 엘리먼트를 생성한다.
     * @param {element} tagName
     * @param {attrs} attrs
     * @returns element
     */
    #makeElement = (tagName, attrs) => {
        const $dom = document.createElement(tagName);
        for (const [key, value] of Object.entries(attrs)) {
            $dom[key] = value;
        }
        $dom.textContent = attrs.text;
        return $dom;
    };

    /**
     * 돔 엘리먼트를 선택한다.
     * @param {element} selector
     * @returns
     */
    #getElement (selector) {
        const element = document.querySelector(selector);
        return element;
    }

    /**
     * 계산기 외형 및 키패드를 셋팅.
     * @param {model} calulateData
     */
    makeCalculator (calulateData) {
        calulateData.forEach(item => {
            const createElement = this.#makeElement('button', {
                id: item.id,
                className: item.className,
                text: item.text,
            });
            this.#getElement('#grid').append(createElement);
        });
    }

    /**
     * 푸쉬된 숫자에 클릭 이벤트를 할당하여 값을 콜백시킨다.
     * @param {string} handler
     */
    setInputNumber (handler) {
        this.#getElement('#grid').addEventListener('click', e => {
            if (e.target.id !== 'grid') handler(e.target.innerText);
        });
    }

    /*
     * 선택한 숫자를 계산기에 보여준다.
     * 12 자리를 넘어갔을때 폰트 사이즈를 조절한다.
     * @param {number} getValue
     */
    displayCalcValue (getValue) {
        const resultBox = this.#getElement('#result');

        resultBox.classList.remove('font-180');
        if (getValue.toString().length > 12)
            resultBox.classList.add('font-180');

        result.textContent = getValue;
    }
}

/**
 * @class Controller
 *
 * @param model
 * @param view
 */
class Controller {
    constructor (model, view) {
        // 구조상 Model 에는 스키마만 존재하는 게 맞다고 생각하여 계산기에 대한 데이터는 컨트롤러에 존재함.
        const calculatorData = [
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
        this.model = model;
        this.view = view;
        this.view.makeCalculator(calculatorData);
        this.view.setInputNumber(this.setCalcKeypad);
    }

    /**
     * 'C' 일때 모든 값을 0 으로 초기화
     * @returns ''
     */
    #clearValues = () => {
        this.model.setFirstValue(0);
        this.model.setSecondValue(null);
        this.model.setResultValue(0);
        this.model.setCalcType(null);
        return '';
    };

    /**
     * 입력 된 값이 첫번째값 입력 또는 두번째 값인지 체크한다.
     * 키패드로 전달된 값을 연산자 여부에 따라서 첫번째, 두번째 값으로 셋팅한다.
     * @param {string} value
     */
    #checkValues (value) {
        if (this.model.getResultValue() === '숫자 아님') this.#clearValues();

        const calcType = this.model.calcType;
        !calcType
            ? this.model.setFirstValue(Number(this.model.firstValue + value))
            : this.model.setSecondValue(Number(this.model.secondValue + value));

        const displayValue = calcType
            ? this.model.secondValue
            : this.model.firstValue;

        this.view.displayCalcValue(displayValue);
    }

    /**
     * 키패드에 입력된 값으로 계산을 한다.
     * @param {string} value
     */
    #doCalculrate = value => {
        if (Number.isInteger(Number(value))) {
            this.#checkValues(value);
            return;
        }
        // 선택한 값으로 연산자를 실행시킨다.
        if (value !== '=') this.model.setCalcType(value);
        this.executeOperator(value);
    };

    /**
     * 최종 계산 된 값을 시각적인 깜빡임 효과와 함께 보여준다.
     */
    #displayResultValue () {
        this.view.displayCalcValue('');
        setTimeout(() => {
            this.view.displayCalcValue(this.model.getResultValue());
        }, 100);
    }
    /**
     * 사칙연산을 구분하고 계산된 값을 출력한다.
     * @param {string} type
     */
    executeOperator = type => {
        const calcType = this.model.getCalcType();
        const firstValue = this.model.getFirstValue();
        const secondValue = this.model.getSecondValue();

        if (['+', '-', '÷', 'x', '='].includes(type)) {
            const doCalc = {
                ['+']: () => {
                    this.model.setResultValue(firstValue + secondValue);
                },
                ['-']: () => {
                    this.model.setResultValue(firstValue - secondValue);
                },
                ['x']: () => {
                    if (type === '=' && this.model.getResultValue() === 0)
                        this.model.setFirstValue(0);

                    this.model.setResultValue(firstValue * secondValue);
                },
                ['÷']: () => {
                    if (type !== '÷') {
                        // 부동 소수점을 해결하기 위해서 math.js 라이브러리 사용.
                        const result = math.divide(firstValue, secondValue);
                        this.model.setResultValue(result);
                        if (result === Infinity) {
                            this.model.setResultValue('숫자 아님');
                            this.#displayResultValue();
                        }
                    }
                },
                ['=']: () => {},
            };
            doCalc[type]() || doCalc[calcType]();
            // 첫번째 결과 값에 새로운 값을 연산하기 위해 결과 값을 첫번째 값에 Set.
            if (this.model.getResultValue() !== 0)
                this.model.setFirstValue(this.model.getResultValue());

            this.model.setSecondValue(0);

            console.log(
                `${firstValue} ${calcType} ${secondValue} = ${this.model.getResultValue()}`,
            );
        }

        // 두번째 값이 존재 할때 결과 값을 보여주도록 한다.
        if (secondValue !== 0 && secondValue != null) {
            this.#displayResultValue();
        }
    };

    /**
     * 클릭 이벤트로 리턴된 값을 결과 값에 보여준다.
     * @param {string} value
     */
    setCalcKeypad = value => {
        if (value === 'C') {
            this.#clearValues();
            return;
        }
        this.#doCalculrate(value);
    };
}

const app = new Controller(new Model(), new View());
