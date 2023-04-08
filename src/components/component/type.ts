import Listeners from '../../shared/type';

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

export default ComponentData;
