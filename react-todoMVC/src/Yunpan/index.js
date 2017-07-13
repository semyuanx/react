import React from 'react';

import { Router,Route,Link,IndexLink,hashHistory,IndexRoute } from 'react-router';

import { Menu, Icon,Switch ,Row,Col} from 'antd';

import FileList from './yunpanList/index.js';

import {getFile} from "./api.js";

import Loading from './Loading/index.js'

var rou = React.createClass({
    getInitialState(){
        return {
            file:[],
            path:"",
            load:true
        }
        
    },
    render(){
        return (
            <div>
                <p onClick={ this.hanld}>哈哈哈</p>
               <FileList 
                file={this.state.file}
                path = {this.state.path}
                getfile = {this.getFiles}
                lo ={this.state.load}
                loadss ={Loading}
                />
            </div>           
        )
    },
    getFiles(path){
        var _this = this;
        this.setState({
            load:true
        })
        getFile(path,function(res){
            _this.setState({
                file:res.file,
                path:res.path,
                load:false
            })
        },function(err){
            console.log(err);
        })
    },
    componentDidMount(){
        this.getFiles("/")
    }
})

export default rou;

