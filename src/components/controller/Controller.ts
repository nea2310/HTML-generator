/* eslint-disable no-eval */
/* eslint-disable class-methods-use-this */
import Component from '../component/Component';
import { Listeners } from '../component/type';

class Controller {
  private controller: Element;

  private baseTag = 'controller';

  private submitButton?: HTMLButtonElement | null;

  private HTMLTemplateTextArea?: HTMLTextAreaElement | null;

  private shapeSelector?: HTMLSelectElement | null;

  private widthInput?: HTMLInputElement | null;

  private heightInput?: HTMLInputElement | null;

  private backgroundInput?: HTMLInputElement | null;

  private borderColorInput ?: HTMLInputElement | null;

  private borderWidthInput ?: HTMLInputElement | null;

  private borderRadiusInput?: HTMLInputElement | null;

  private borderStyleSelector?: HTMLSelectElement | null;

  private textInput?: HTMLInputElement | null;

  private eventListenersSelector?: HTMLSelectElement | null;

  private fontColorInput?: HTMLInputElement | null;

  constructor(element: Element) {
    this.controller = element;
    this.render();
    this.bindEventListeners();
    this.addEventListeners();
  }

  private render() {
    this.HTMLTemplateTextArea = this.getElement(`.${this.baseTag}__html-template`) as HTMLTextAreaElement;
    this.shapeSelector = this.getElement(`.${this.baseTag}__shape`) as HTMLSelectElement;

    this.widthInput = this.getElement(`.${this.baseTag}__width`) as HTMLInputElement;
    this.heightInput = this.getElement(`.${this.baseTag}__height`) as HTMLInputElement;
    this.backgroundInput = this.getElement(`.${this.baseTag}__background-color`) as HTMLInputElement;
    this.borderColorInput = this.getElement(`.${this.baseTag}__border-color`) as HTMLInputElement;
    this.fontColorInput = this.getElement(`.${this.baseTag}__font-color`) as HTMLInputElement;
    this.borderWidthInput = this.getElement(`.${this.baseTag}__border-width`) as HTMLInputElement;
    this.borderRadiusInput = this.getElement(`.${this.baseTag}__border-radius`) as HTMLInputElement;
    this.borderStyleSelector = this.getElement(`.${this.baseTag}__border-style`) as HTMLSelectElement;

    this.textInput = this.getElement(`.${this.baseTag}__text`) as HTMLInputElement;

    this.eventListenersSelector = this.getElement(`.${this.baseTag}__event-listeners`) as HTMLSelectElement;

    this.submitButton = this.getElement(`.${this.baseTag}__submit-button`) as HTMLButtonElement;
    this.borderRadiusInput.disabled = this.shapeSelector.value === 'square';
  }

  private addEventListeners() {
    if (this.submitButton) this.submitButton.addEventListener('click', this.clickButton);
    if (this.shapeSelector) this.shapeSelector.addEventListener('change', this.changeShapeSelector);
  }

  private bindEventListeners() {
    this.clickButton = this.clickButton.bind(this);
    this.changeShapeSelector = this.changeShapeSelector.bind(this);
  }

  private changeShapeSelector(event: Event) {
    const { target } = event;
    if (!(target instanceof HTMLSelectElement) || !this.borderRadiusInput) return;
    this.borderRadiusInput.disabled = target.value !== 'round';
  }

  private getElement = (
    selector: string,
    wrapper: Element = this.controller,
  ) => wrapper.querySelector(selector);

  private clickButton() {
    function getCallbacks(jsonString: string) {
      let callbacks: Listeners;
      try {
        // eslint-disable-next-line max-len
        callbacks = (JSON.parse(jsonString)).map((item: [string, string[]]) => [item[0], item[1].map((element) => eval(element))]);
      } catch (e) {
        return undefined;
      }

      return callbacks;
    }
    const width = this.widthInput?.value;
    const height = this.heightInput?.value;
    const borderWidth = this.borderWidthInput?.value;
    const borderRadius = this.borderRadiusInput?.value;
    const component = new Component({
      HTMLtemplate: this.HTMLTemplateTextArea?.value,
      viewParameters: {
        shape: this.shapeSelector?.value === 'round' ? 'round' : 'square',
        width: width ? parseInt(width, 10) : undefined,
        height: height ? parseInt(height, 10) : undefined,
      },
      modifiers: {
        background: this.backgroundInput?.value,
        borderColor: this.borderColorInput?.value,
        borderWidth: borderWidth ? parseInt(borderWidth, 10) : 0,
        borderRadius: borderRadius ? parseInt(borderRadius, 10) : 0,
        borderStyle: this.borderStyleSelector?.value,
        fontColor: this.fontColorInput?.value,
      },
      text: this.textInput?.value ?? '',
      eventListeners: getCallbacks(this.eventListenersSelector?.value ?? ''),
    });

    const contentItems = component.contentItemsCollection;
    if (contentItems) {
      contentItems.forEach((contentItem) => {
        document.body.append(contentItem);
      });
    }
  }
}

export default Controller;
