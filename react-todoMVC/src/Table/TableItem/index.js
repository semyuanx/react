import React from 'react';



var tableItem = React.createClass({
    
    render(){
        var headData = this.props.data,
            bodyData = this.props.colData,
            arr = [];

        var hDom = headData.map(function(obj,i){
            arr.push(obj);
            return (
                <td key={i}>
                    {obj}
                </td>
            ) 
        })
        var bDom = bodyData.map(function(obj,i){
            var tds = arr.map(function(td,j){
                return (
                    <td >{obj[td]}</td>
                )
            })
            return (
                <tr>{tds}</tr>
            )
        })
        return (
            <table>
                <thead>
                    <tr>{hDom}</tr>
                </thead>
                <tbody>
                    {bDom}
                </tbody>
            </table>
        )
    }
})
export default tableItem;