export default class View {
    constructor () {
        this.app = this.getElement('#grid');
        this.result = 0;
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

    /**
     * 계산기를 보여준다.
     * @param {model} hancomData
     */
    displayHancomCalculate (hancomData) {
        hancomData.forEach(element => {
            const createElement = this.createElement(
                'button',
                element.id,
                element.className,
            );
            createElement.textContent = element.text;
            this.app.append(createElement);
        });
    }

    /**
     * C 를 눌렀을때 0 으로 초기화 한다.
     */
    resetResult () {
        result.textContent = 0;
    }

    setFirstInputNumber (handler) {
        const grid = this.getElement('#grid');
        grid.addEventListener('click', e => {
            if (e.target.id !== 'grid') handler(e.target.innerText);
        });
    }

    /**
     * 선택한 숫자를 입력한다.
     * @param {number} selectNumber
     */
    displayResult (getValue) {
        if (getValue == 'c') {
            this.resetResult();
        } else {
            if (result.textContent !== '0') {
                result.textContent += Number(getValue);
            } else {
                result.textContent = Number(getValue);
            }
        }
        this.result = result.textContent;

        return result.textContent;
    }
}
