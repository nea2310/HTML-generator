/* eslint-disable no-param-reassign */
import ComponentData from './type';

const DEFAULT_BORDER_RADIUS = 5;

class Component {
  private template: HTMLTemplateElement;

  private contentItems?: Element[];

  constructor(data?: ComponentData) {
    this.template = document.createElement('template');
    this.render(data);
  }

  get contentItemsCollection() {
    return this.contentItems;
  }

  private render(data?: ComponentData) {
    this.template.innerHTML = data?.HTMLtemplate?.trim() || '<button class = "component__button"></button>';
    this.contentItems = Array.from(this.template.content.children).map((item) => {
      if (item instanceof HTMLElement) {
        item.style.width = `${data?.viewParameters?.width}px`;
        item.style.height = `${data?.viewParameters?.height}px`;
        item.style.background = data?.modifiers?.background ?? '';
        item.style.borderWidth = `${data?.modifiers?.borderWidth}px`;
        item.style.borderColor = data?.modifiers?.borderColor ?? '';
        item.style.borderStyle = data?.modifiers?.borderStyle ?? '';
        item.style.borderRadius = `${data?.viewParameters?.shape === 'round'
          ? `${data?.modifiers?.borderRadius ?? DEFAULT_BORDER_RADIUS}px` : ''}`;
        item.innerText = data?.text ?? '';
      }
      return item;
    });
  }
}

export default Component;
