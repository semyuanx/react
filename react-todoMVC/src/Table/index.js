import React from 'react';
import TableItem from './TableItem/index.js'

var table = React.createClass({
    getInitialState(){
        return {
            headData:['id','name','age'],
            colData:[{
                id:0,
                name:'小黑',
                age:'18'
            },{
                id:1,
                name:'小白',
                age:'18'
            },{
                id:2,
                name:'小黑',
                age:'18'
            },{
                id:3,
                name:'小黑',
                age:'18'
            }]
        }
    },
    render(){
        return (
            <div>
                <TableItem data={this.state.headData} colData={this.state.colData} />
            </div>
        )
    }
})
export default table;