class Model {
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

class View {
    constructor () {
        // The root element
        this.app = this.getElement('#grid');
        const hancomData = [
            { id: 'viewBox', text: '0', className: 'viewBox grayBox' },
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

        this.app.append;
        hancomData.forEach(element => {
            const createElement = this.createElement(
                'div',
                element.id,
                element.className,
            );
            createElement.textContent = element.text;
            this.app.append(createElement);
        });
    }

    // Create an element with id and an optional CSS class
    createElement (tag, id, className) {
        const element = document.createElement(tag);
        if (id) element.id = id;
        if (className) {
            const classList = className.split(' ');
            element.classList.add(...classList);
        }
        return element;
    }
    // Retrieve an element from the DOM
    getElement (selector) {
        const element = document.querySelector(selector);
        return element;
    }
}

class Controller {
    constructor (model, view) {
        this.model = model;
        this.view = view;
    }
}

const app = new Controller(new Model(), new View());
