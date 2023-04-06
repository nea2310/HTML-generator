/* eslint-disable class-methods-use-this */
import ComponentData from './type';

class Component {
  constructor(data?: ComponentData) {
    this.render(data);
  }

  private render(data?: ComponentData) {
    const wrapper = document.createElement('div');
    const template = data?.template?.trim();
    wrapper.innerHTML = template || '<button class = "component__button">Новая кнопка</button>';
    const contentItems = wrapper.children;
    if (contentItems) {
      Array.from(contentItems).forEach((contentItem) => {
        contentItem.classList.add('component__button');
        document.body.append(contentItem);
      });
    }
    wrapper.remove();
  }
}

export default Component;
