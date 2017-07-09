
import React from 'react';
import ChildA from './Child-a/index';
import ChildB from './Child-b/index';
import ChildC from './Child-c/index';
import request from 'superagent';
 

var App = React.createClass({
  render(){
    console.log(111);
    return (
      <div className="APP">
        <h3>我是父组件</h3>
        {/*<ChildA />
        <ChildB />*/}
        {/*<ChildC />*/}
      </div>
    )
  },
  componentDidMount:function(){
    request
      .get("http://101.200.129.112:9527/react1/student")
      .end(function(err,res){
        console.log(res);
      })
    console.log(request);
    console.log(222);
  }
})

export default App;

