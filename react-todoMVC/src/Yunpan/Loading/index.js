import React from 'react';
import {Icon} from 'antd';

var Loading = React.createClass({
    render(){
        return (
            <div>
                <Icon type="loading" />
                <p>加载中...</p>
            </div>
            
        )
    }
})
export default Loading;