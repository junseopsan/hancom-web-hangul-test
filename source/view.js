export default class View {
    constructor () {
        this.app = this.getElement('#grid');
        this.grid = this.getElement('#grid');
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
            this.app.append(createElement);
        });
    }

    /**
     * C 를 눌렀을때 0 으로 초기화 한다.
     */
    resetResult () {
        result.textContent = 0;
    }

    calculatePlus (handler) {
        this.grid.addEventListener('click', e => {
            if (e.target.id !== 'grid' && e.target.innerText === '+') {
                handler();
            }
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
     * @param {number} selectNumber
     */
    displayCalcValue (getValue) {
        result.textContent = getValue;
    }
}
