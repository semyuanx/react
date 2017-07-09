import React from 'react';
import Todolist from './TodoList/index.js'
function id(){
    return Math.random().toString().replace(/\./,'');
}

var TodoMVC = React.createClass({
    getInitialState() {
        return {
            items: [
                { text: 'aaa', id: id(), type:'active' },
                { text: 'bbb', id: id(), type:'no-active' },
                { text: 'ccc', id: id(), type:'active'}
            ],
            value: "我是默认值",
            types:'no-active'
        }
    },
    render() {
        var items = this.state.items,
            itemType = this.state.types,
            aaa = [];
        items.map(function(o){
            if(o.type === itemType ||itemType === "all"){
                aaa.push(o);
            }
        })
        return ( 
            <div>
                <h3 > todo - list </h3> 
            <p >
            <input type = "text"
            value = { this.state.value }
            onChange = { this.handleChange }/> 
            <button 
                onClick = { this.handleAdd } 
                
            > 提交 </button> 
            </p> 
            <Todolist 
                items = { aaa }
                onDelItem = { this.handleDel }
                onEnit = { this.handleEnit }    
                onType = {this.handleChgeType}
            /> 
            
            <button onClick={(e)=>this.setState({types:"all"})}>全部</button>
            <button onClick={(e)=> this.setState({types:"active"})} >已选</button>
            <button onClick = {(e)=> this.setState({types:"no-active"})} >未选</button>
            </div>
        )
    },
    handleChgeType:function(o){
        var items = this.state.items;
        console.log(o)
        items =  items.map(function(v){
            if(v.id === o.id){
                v.type = o.type
            }
            return v;
        })
        this.setState({
            items:items
        })
    },
    handleEnit:function(obj){
        var items = this.state.items;
        items = items.map(function(o){
            if(o.id === obj.id){
                o.text = obj.text;
            }
            return o;
        })
        this.setState({
            items:items
        })
    },
    handleDel:function(o){
        var items = this.state.items,
            json = [];
        for(var i = 0;i < items.length;i++){
            if(items[i].id !== o.id){
                json.push(items[i]);
            }
        };
        this.setState({
            items:json
        })
    },
    handleAdd: function() {
        var item = this.state.value,
            items = this.state.items;
        items.push({ 
            text: item, 
            id: items.length 
        })
        this.setState({
            items:items,
            value:""
        })
    },
    handleChange: function(e) {
        this.setState({
            value: e.target.value
        })
    }
})
export default TodoMVC;