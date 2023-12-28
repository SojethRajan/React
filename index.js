import React from "react";
import ReactDOM from "react-dom/client";          

const heading1 = React.createElement(
    'h1',
    {
        id : 'title',
        className : 'classname'
    },
    'Hello React'
    );

const paragraph = React.createElement(
    'p',
    {
        id : 'title'
    },
    'Hello paragraph'
    );


const container = React.createElement(
    'div',
    {
        id : 'contaier'
    },
    [heading1,paragraph]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

console.log('Created a feature branch')