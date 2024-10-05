
const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1",{},"This H1 Tag"),
        React.createElement("h1",{},"This H2 Tag")],
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1",{},"This H1 Tag"),
        React.createElement("h1",{},"This H2 Tag")],
    )]);

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello React"
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


