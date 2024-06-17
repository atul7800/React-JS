function createReactElement(reactElement, rootElement){
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.innerText = reactElement.child;

    rootElement.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:"https://www.google.co.in/",
        target:'_blank'
    },
    child:'Google'
}

const rootElement = document.getElementById('root');

createReactElement(reactElement, rootElement);