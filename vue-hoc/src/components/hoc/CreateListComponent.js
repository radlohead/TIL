export default function CreateListComponent(ListComponent) {
  return {
    functional: true,
    render(h, context) {
      return h(
        ListComponent,
        {
          ...context.data,
          nativeOn: {
            click() {
              console.log("clicked: ", context.children[0].text);
            }
          }
        },
        context.children
      );
    }
  };
}
