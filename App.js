import React from "react";
import ReactDOM from "react-dom/client";


//React Element
//const heading = React.createElement("h1",{},"Hello");
const elem = <span>inner span</span>
const heading = <h1>This is react!!</h1>

//or 

const heading2 = (
    <div>
        <h1>Test heading 2</h1>
        {elem}
    </div>
);

//React functional component
const HeadComponent = () => <h1>Test headComponent</h1>

//or

const HeadComponent2 = () => (
    <h1 className="test">Test 2</h1>
);

//or

const num = 1000;
const HeadComponent3 = () => {
    return (
        <div className="container">
            <div>Test HeadComponent3</div>
            <HeadComponent2/>
            {HeadComponent()}
            {heading2}
            {num}
            {console.log("abcd")}
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading2);

root.render(<HeadComponent3/>)
