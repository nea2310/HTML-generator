type Listeners = [keyof HTMLElementEventMap, EventListenerOrEventListenerObject[]][];

type ComponentData = {
  HTMLtemplate?: string;
  viewParameters?: {
    width?: number;
    height?: number;
    shape?: 'square' | 'round'
  };
  modifiers?: {
    background?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    borderStyle?: string;
    fontColor?: string;
  };
  text?: string;
  eventListeners?: Listeners;
};

export { ComponentData, Listeners };
