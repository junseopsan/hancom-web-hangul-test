export default class View {
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
     * 돔 엘리먼트를 선택한다..
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
