//I,port react and react-dom from node_modules
import React from 'react';
import ReactDOM from 'react-dom/client';


//Printing Hello World through react

// Here reactHeading is react element which will be nothing but JavaScript Object.
// It has property called props which contain children and attributes

const reactHeading = React.createElement("h1", {id: "heading"}, "Hello World From React!");

/**
 * 
 * Create Nested Elemensts
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm an H1 tag</h1>
 *          <h2>I'm an H2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an H1 tag</h1>
 *          <h2>I'm an H2 tag</h2>
 *      </div>
 * </div>
 * 
 */


const nestedElements = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child1"},
            [
                React.createElement("h1", {}, "I'm an H1 tag"),
                React.createElement("h2", {}, "I'm an H2 tag")
            ]
        ),
        React.createElement(
            "div", 
            {id: "child2"},
            [
                React.createElement("h1", {}, "I'm an H1 tag"),
                React.createElement("h2", {}, "I'm an H2 tag")
            ]
        )
    ]
)


const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

//While rendering will take reactHeading object and converts to h1 tag and puts to DOM
reactRoot.render(nestedElements);
