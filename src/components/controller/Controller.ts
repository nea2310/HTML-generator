/* eslint-disable @typescript-eslint/no-unused-vars */
import Component from '../component/Component';

class Controller {
  private button?: HTMLButtonElement | null;

  private HTMLTemplateTextArea?: HTMLTextAreaElement | null;

  private controller: Element;

  private baseTag = 'controller';

  constructor(element: Element) {
    this.controller = element;
    this.render();
    this.bindEventListeners();
    this.addEventListeners();
  }

  private getElement = (
    selector: string,
    wrapper: Element = this.controller,
  ) => wrapper.querySelector(selector);

  private render() {
    this.HTMLTemplateTextArea = this.getElement(`.${this.baseTag}__html-template`) as HTMLTextAreaElement;
    this.button = this.getElement(`.${this.baseTag}__submit-button`) as HTMLButtonElement;
  }

  private addEventListeners() {
    if (this.button) this.button.addEventListener('click', this.clickButton);
  }

  private bindEventListeners() {
    this.clickButton = this.clickButton.bind(this);
  }

  private clickButton() {
    const newElement = new Component({
      template: this.HTMLTemplateTextArea?.value,
    });
  }
}

export default Controller;
