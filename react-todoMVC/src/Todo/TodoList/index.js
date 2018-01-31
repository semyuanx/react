import React from 'react';

var TodoDom = React.createClass({
    getInitialState(){
        return {
            value:this.props.o.text
        }
    },
    render() {
        return (
            <li >
                {this.props.o.text}
                <button onClick={this.delItem}>删除</button>
                <button onClick = {this.changeType}>改变状态</button>
                <p>
                    <input type="text" onChange = {this.hanldChange} value={ this.state.value} />
                    <button onClick={this.addItem}>确定</button>
                    <button>取消</button>
                </p>
            </li>
        )
        
    },
    hanldChange:function(e){
        this.setState({
            value:e.target.value
        })
    },
    changeType:function(){
        var val = this.props.o;
        if(val.type=="active")val.type="no-active";
        else val.type="active";
        this.props.onchange(val);
    },
    delItem: function(){
        this.props.delDom(this.props.o);
    },
    addItem: function(){
        this.props.enit({text:this.state.value,id:this.props.o.id});
    }
})

var TodoList = React.createClass({

    render() {
        var _this = this;
        var item = this.props.items.map(function (o) {
            return (
                <TodoDom onchange = {_this.props.onType} enit = {_this.props.onEnit} key={o.id} o={o} delDom = {_this.del} />
            )
        });
        return (
            <ul>{item}</ul>
        )
    },
    del: function (o) {
        this.props.onDelItem(o);
    }

})
export default TodoList;