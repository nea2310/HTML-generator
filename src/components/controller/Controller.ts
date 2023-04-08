/* eslint-disable no-eval */
/* eslint-disable class-methods-use-this */
import Component from '../component/Component';
import Listeners from '../../shared/type';

class Controller {
  private controller: Element;

  private baseTag = 'controller';

  private submitButton?: HTMLButtonElement | null;

  private HTMLTemplateTextArea?: HTMLTextAreaElement | null;

  private shapeSelector?: HTMLSelectElement | null;

  private widthInput?: HTMLInputElement | null;

  private heightInput?: HTMLInputElement | null;

  private backgroundInput?: HTMLInputElement | null;

  private borderColorInput?: HTMLInputElement | null;

  private borderWidthInput?: HTMLInputElement | null;

  private borderRadiusInput?: HTMLInputElement | null;

  private borderStyleSelector?: HTMLSelectElement | null;

  private textInput?: HTMLInputElement | null;

  private eventListenersSelector?: HTMLSelectElement | null;

  private fontColorInput?: HTMLInputElement | null;

  constructor(element: Element) {
    this.controller = element;
    this.init();
    this.bindEventListeners();
    this.addEventListeners();
  }

  private static getCallbacks(jsonString: string) {
    let callbacks: Listeners;
    try {
      // eslint-disable-next-line max-len, @typescript-eslint/no-implied-eval
      callbacks = (JSON.parse(jsonString)).map((item: [string, string[]]) => [item[0], item[1].map((element) => eval(element))]);
    } catch (error) {
      return error;
    }

    return callbacks;
  }

  private init() {
    this.HTMLTemplateTextArea = this.getElement('html-template') as HTMLTextAreaElement;

    this.shapeSelector = this.getElement('shape') as HTMLSelectElement;
    this.widthInput = this.getElement('width') as HTMLInputElement;
    this.heightInput = this.getElement('height') as HTMLInputElement;

    this.backgroundInput = this.getElement('background-color') as HTMLInputElement;
    this.borderColorInput = this.getElement('border-color') as HTMLInputElement;
    this.fontColorInput = this.getElement('font-color') as HTMLInputElement;
    this.borderWidthInput = this.getElement('border-width') as HTMLInputElement;
    this.borderRadiusInput = this.getElement('border-radius') as HTMLInputElement;
    this.borderStyleSelector = this.getElement('border-style') as HTMLSelectElement;

    this.textInput = this.getElement('text') as HTMLInputElement;

    this.eventListenersSelector = this.getElement('event-listeners') as HTMLSelectElement;

    this.submitButton = this.getElement('submit-button') as HTMLButtonElement;

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
    if (target instanceof HTMLSelectElement && this.borderRadiusInput) {
      this.borderRadiusInput.disabled = target.value !== 'round';
    }
  }

  private getElement(
    selector: string,
    baseTag = this.baseTag,
    wrapper: Element = this.controller,
  ) { return wrapper.querySelector(`.${baseTag}__${selector}`); }

  private clickButton() {
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
      eventListeners: Controller.getCallbacks(this.eventListenersSelector?.value ?? ''),
    });

    (component.contentItemsCollection ?? []).forEach((contentItem) => {
      document.body.append(contentItem);
    });
  }
}

export default Controller;
