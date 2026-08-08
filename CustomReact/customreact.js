function customRender(reactElement, container) {
    /*const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    container.appendChild(domElement)*/
    //problem with above code is that it will not work for nested elements, so we need to use recursion to solve this problem
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            countinue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElment = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me to Visit google'
}

const  mainContainer = document.querySelector('#root')

customRender(reactElment, mainContainer)