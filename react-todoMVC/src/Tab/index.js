import React from 'react';
import Cart from './TabItem'

require("./index.css")

const TitleBar = Cart.TitleBar
const Title = Cart.Title
const ContentBar = Cart.ContentBar
const Content = Cart.Content
var Tab = React.createClass({
    getInitialState(){
        return {
            barIndex:0
        }     
    },
    render(){
        return (
            <div className="cart">
                <Cart barIndex={this.state.barIndex}>
                    <TitleBar >
                        <Title onClick={(e)=>this.setState({barIndex:0})} index={0} >我是第一个</Title>
                        <Title onClick={(e)=>this.setState({barIndex:1})} index={1}>我是第二个</Title>
                        <Title onClick={(e)=>this.setState({barIndex:2})} index={2}>我是第三个</Title>
                    </TitleBar>

                    <ContentBar>
                        <Content index={0} >我是第一个内容</Content>
                        <Content index={1}>我是第一个内容</Content>
                        <Content index={2}>我是第一个内容</Content>
                    </ContentBar>
                </Cart>
            </div>
        )
    }
});
export default Tab;