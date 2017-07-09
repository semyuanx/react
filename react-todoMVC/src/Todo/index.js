import React from 'react';
import Todolist from './TodoList/index.js'
function id(){
    return Math.random().toString().replace(/\./,'');
}

var TodoMVC = React.createClass({
    getInitialState() {
        return {
            items: [
                { text: 'aaa', id: id() },
                { text: 'bbb', id: id() },
                { text: 'ccc', id: id() }
            ],
            value: "我是默认值"
        }
    },
    render() {
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
                items = { this.state.items }
                onDelItem = { this.handleDel }
                onEnit = { this.handleEnit }    
            /> 
            </div>
        )
    },
    handleEnit:function(obj){
        var items = this.state.items;
        items = items.map(function(o){
            if(o.id == obj.id){
                o.text = obj.text;
            }
            return o;
        })
        console.log(obj);
        this.setState({
            items:items
        })
    },
    handleDel:function(o){
        var items = this.state.items,
            json = [];
        for(var i = 0;i < items.length;i++){
            if(items[i].id != o.id){
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