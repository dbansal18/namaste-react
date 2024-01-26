
const parent = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child1" }, [
        React.createElement('h1', { id: "heading" }, 'Hello World!'),
        React.createElement('h2', { id: "subHeading" }, 'I am React!')
    ]),
    React.createElement('div', { id: "child2" }, [
        React.createElement('h1', { id: "heading" }, 'Hello World!'),
        React.createElement('h2', { id: "subHeading" }, 'I am React!')
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);