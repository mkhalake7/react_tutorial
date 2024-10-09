import React from "react";
import ReactDOM from "react-dom/client";

// react elemet

const heading = React.createElement("h1", {id: "heading"}, "This is Heading ");

// JSX: Bable transfer the JSX code top React 


const NavBar = () => (
    <div id="nav">
        <nav className="navbar background">
        <div class="logo">
            <img src= "https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="Logo" />
        </div>
        <ul className="nav-list">
            <li><a href="/">Web Technology</a></li>
        </ul>
        <div className="rightnav">
            <input type="test" name="search" id="search"/>
            <button className="btn btn-sm">Search</button>
        </div>
    </nav>
    </div>
);

const title = (
    <div className='head' tabIndex='5'>
        <NavBar/>
        <h1>
            Simple web page Template
        </h1>       
    </div>
);


const samplestring = "This Is a Sample string "
// React fuctional component

const HeadingComponent = () =>(
    <div id="container">
        {title}
        <h1 className="heading">This is fuctional component</h1>
        <h1>{samplestring}</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)