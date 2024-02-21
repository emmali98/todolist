function component() {
    const mainList = document.createElement('div');
    mainList.textContent = 'TODOs';
    
    return mainList;
}

document.body.appendChild(component());