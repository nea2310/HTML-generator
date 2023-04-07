import Component from '../component/Component';

class Controller {
  private controller: Element;

  private baseTag = 'controller';

  private button?: HTMLButtonElement | null;

  private HTMLTemplateTextArea?: HTMLTextAreaElement | null;

  constructor(element: Element) {
    this.controller = element;
    this.render();
    this.bindEventListeners();
    this.addEventListeners();
  }

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

  private getElement = (
    selector: string,
    wrapper: Element = this.controller,
  ) => wrapper.querySelector(selector);

  private clickButton() {
    const component = new Component({
      HTMLtemplate: this.HTMLTemplateTextArea?.value,
    });

    const contentItems = component.elementsCollection;
    if (contentItems) {
      Array.from(contentItems).forEach((contentItem) => {
        document.body.append(contentItem);
      });
    }
  }
}

export default Controller;
