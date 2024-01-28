import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS object => HTMLElement(render)
// const header = React.createElement("h1", {id: "heading"}, "Namaste React");

// JSX is transpiled before it reaches the JS engine. Transpilation is done by Babel under Parcel.
// JSX => React.createElement => ReactElement-JS object => HTMLElement(render)
const headerJsx = <h1 id="heading">Namaste React by JSX</h1>

const HeadingComponent = () => (
    <div>
        {headerJsx}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);