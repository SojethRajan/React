const container = React.createElement(
    'div',
    {
        id : 'contaier'
    },
    'hello div'
)
const heading1 = React.createElement(
    'h1',
    {
        id : 'title',
        className : 'classname'
    },
    'Hello React'
    );

const heading2 = React.createElement(
    'p',
    {
        id : 'title'
    },
    'Hello heading2'
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([container,heading1,heading2]);