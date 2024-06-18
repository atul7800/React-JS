function createReactElement(reactElement, rootElement){
    // Version 1
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.innerText = reactElement.child;
    rootElement.appendChild(domElement); 
    */

    // Version 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.child;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
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