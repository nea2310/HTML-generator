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
  };
  text?: string;
  eventListeners?: {
    [key: string]: ((event?: Event) => void)[]
  }
};

export default ComponentData;
