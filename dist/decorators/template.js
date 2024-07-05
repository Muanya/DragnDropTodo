export function loadTemplate(templateId, hostId, elementId) {
    return function (_) {
        let template = document.getElementById(templateId);
        let child = document.importNode(template.content, true)
            .firstElementChild;
        child.id = elementId;
        let host = document.getElementById(hostId);
        host.insertAdjacentElement("beforeend", child);
    };
}
export function autobind(_, _2, descriptor) {
    const adjDescriptor = {
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=template.js.map