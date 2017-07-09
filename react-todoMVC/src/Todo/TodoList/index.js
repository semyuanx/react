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
                <button onClick={this.props.delDom.bind(this, this.props.o)}>删除</button>
                <p>
                    <input type="text" onChange = {this.hanldChange} value={ this.state.value} />
                    <button onClick={this.props.enit.bind(this,{text:this.state.value,id:this.props.o.id})}>确定</button>
                    <button>取消</button>
                </p>
            </li>
        )
        
    },
    hanldChange:function(e){
        this.setState({
            value:e.target.value
        })
    }
})

var TodoList = React.createClass({

    render() {
        var _this = this;
        var item = this.props.items.map(function (o) {
            return (
                <TodoDom enit = {_this.props.onEnit} key={o.id} o={o} delDom = {_this.del} />
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