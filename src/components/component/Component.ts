import ComponentData from './type';

class Component {
  private template: HTMLTemplateElement;

  constructor(data?: ComponentData) {
    this.template = document.createElement('template');
    this.render(data);
  }

  get elementsCollection() {
    return this.template.content.children;
  }

  private render(data?: ComponentData) {
    this.template.innerHTML = data?.HTMLtemplate?.trim() || '<button class = "component__button">Новая кнопка</button>';
  }
}

export default Component;
