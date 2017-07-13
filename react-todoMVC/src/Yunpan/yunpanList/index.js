import React from 'react';

import { Router,Route,Link,IndexLink,hashHistory,IndexRoute } from 'react-router';

import { Menu, Icon,Switch ,Row,Col} from 'antd';
import Loading from '../Loading/index.js'

require("./index.css");

var ListBlock = React.createClass({
    render(){
        return  (
        <li className="file-item" onClick={(e)=>this.props.change(this.props.path)}>
            <span className="file-item-icon"> <Icon type="folder" /></span>
           
            <span className="file-item-name">{this.props.name}</span>
        </li>
        )
    }
})

var yunList = React.createClass({
    render(){
        var {file,path,getfile,lo,loadss} = this.props;
        var _this = this;
        var dom = file.map(function(obj,j){
            return (
                <ListBlock key={obj.name} name = {obj.name} change={getfile} path={obj.path}  />
            )
        })
        
        var doms =(
            <ul className="file-list">
                {dom}
            </ul>
        )
       
        return (
            <div>
                <div style={{display:lo?'block':'none'}}> 
                    <Loading />
                    </div>
                    <div style={{display:lo?'none':'block'}}> 
                    {doms}
                    </div>
            </div>
            
        )
    }

})
export default yunList;