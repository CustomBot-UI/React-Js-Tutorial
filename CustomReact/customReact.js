function customRender(reactElement, container) {
    const domElement = document.createElement
    (reactElement.type)
    dom.Elment.innerHTML = reactElement.children
    domElment.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    container.appendChild(domElement)
}


const reactElment = {
    type: 'a',
    props : {
        href = 'https://www.google.com',
        target = '_blank',
    },
    children: 'Click Me to Visit google'
}

const  mainContainer = document.querySelector('#root')

customRender(reactElment, mainContainer)