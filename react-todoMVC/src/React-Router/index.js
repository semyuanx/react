import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Link,IndexLink,hashHistory,IndexRoute } from 'react-router';
import Antd from '../Antd/index.js';
import App from '../App/App.js';
import Tab from '../Tab/index.js';
import Table from '../Table/index';
import Todo from '../Todo/index';
import { Menu, Icon,Switch ,Row,Col} from 'antd';
const SubMenu = Menu.SubMenu;


var CompontRouter = React.createClass({
    getInitialState () {
        return {
            theme: 'dark',
            current: '1',
        }
    
  },
   changeTheme(value){
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    hashHistory.push(e.key);
  },
  render() {
    return (<div>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
            <Menu.Item key="antd">antd</Menu.Item>
            <Menu.Item key="app">app</Menu.Item>
            <Menu.Item key="tab">tab</Menu.Item>
            <Menu.Item key="table">table</Menu.Item>
            <Menu.Item key="todo">todo</Menu.Item>
        </Menu>
      </div>
    )
  }
})



var R = React.createClass({
    render(){
      return (
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={Antd}></IndexRoute>
            <Route path="antd" component={Antd}></Route>
            <Route path="app" component={App}></Route>
            <Route path="tab" component={Tab}></Route>
            <Route path="table" component={Table}></Route>
            <Route path="todo" component={Todo}></Route>
          </Route>
        </Router>
      )
    }
})


var RoudeStudy = React.createClass({  
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <CompontRouter />
          </Col>
          <Col span={20}>
            <R/>
          </Col>
          
        </Row>
      </div>
    )
  }

})
export default RoudeStudy;

