function component() {
    const element = document.createElement('div');

    element.textContent = 'hello world';

    return element;
}

document.body.appendChild(component());