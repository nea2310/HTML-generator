type ComponentData = {
  template?: string;
  viewParameters?: {
    width?: number;
    height?: number;
  };
  modifiers?: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    hasArrow?: boolean
    arrowColor?: string;
    is3D?: boolean;
  };
  text?: string;
  eventListeners?: {
    [key: string]: ((event?: Event) => void)[]
  }
};

export default ComponentData;
