var React = require("react");
require("./index.css");

var ChildB = React.createClass({
    render(){
        return (
            <div className="child-b">
                我是childB
            </div>
        )
    }
})

export default ChildB;
