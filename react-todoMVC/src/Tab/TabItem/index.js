import React from 'react';

var Cart = React.createClass({
    render(){
        return (
            <div>{this.props.children}</div>
        )
    },
    getChildContext(){
        return {
            bar : this.props.barIndex
        }
    },
    childContextTypes:{
        bar:React.PropTypes.number     
    }
})

var TitleBar = React.createClass({
    render(){
        return (
            <div>
                {this.props.children}
               
            </div>
        )
    }
})

var Title = React.createClass({
     contextTypes:{
        bar:React.PropTypes.number     
    },
    render(){
        var active="";
        if(this.props.index === this.context.bar)active="active"
        return (
            <div className = {active} onClick={this.props.onClick} >
                {this.props.children}
            </div>
        )
    }
})

var ContentBar = React.createClass({
    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
})

var Content = React.createClass({
    contextTypes:{
        bar:React.PropTypes.number
    },
    render(){
        var active="";
        if(this.props.index === this.context.bar)active="active"
        return (
            <div className={active}>
                {this.props.children}
                 {this.props.index}
            </div>
        )
    }
})

Cart.TitleBar = TitleBar;
Cart.Title = Title;
Cart.ContentBar = ContentBar;
Cart.Content = Content;

export default Cart;