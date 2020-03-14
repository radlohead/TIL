import ListComponentV2 from "../ListComponentV2";

export const CreateListComponentV2 = componentName => {
  return {
    name: componentName,
    render(h) {
      return h(ListComponentV2);
    }
  };
};
