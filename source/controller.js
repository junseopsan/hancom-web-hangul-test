export default class Controller {
    constructor (model, view) {
        this.model = model;
        this.view = view;

        // this.view.bindInputNumber(this.handleInputNumber);

        this.model.setResult(this.viewResultInTheBox);
        this.view.setFirstInputNumber(this.setInputNumber);
        this.view.displayHancomCalculate(this.model.hancomData);
    }
    /**
     * 입력된 값을 보여준다.
     * @param {string} value
     */
    viewResultInTheBox = value => {
        const result = this.view.displayResult(value);
        this.model.setResult(result);
    };

    /**
     * 값을 입력한다.
     * @param {string} value
     */
    setInputNumber = value => {
        this.viewResultInTheBox(value);
    };
}
