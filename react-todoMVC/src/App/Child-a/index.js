// var React = require("react");
import React from 'react';
 require("./index.css");

var ChildA = React.createClass({
    render(){
        return (
            <div className="child-a">
                我是child-a
            </div>
        );
    }
})
export default  ChildA;