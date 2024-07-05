export function loadTemplate(
  templateId: string,
  hostId: string,
  elementId: string
) {
  return function (_: any) {
    let template = document.getElementById(templateId)! as HTMLTemplateElement;
    let child = document.importNode(template.content, true)!
      .firstElementChild as HTMLElement;
    child.id = elementId;

    let host = document.getElementById(hostId)! as HTMLDivElement;

    host.insertAdjacentElement("beforeend", child);

  };
}

export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return descriptor.value.bind(this);
    },
  };

  return adjDescriptor;
}
