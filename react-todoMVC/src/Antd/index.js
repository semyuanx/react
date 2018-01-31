import React from 'react';
import {Table,Button,Modal,Form,Input,Radio} from 'antd';
import ajax from 'superagent';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const api = "http://101.200.129.112:9527/react1/student/";

require('antd/dist/antd.css')

var hr = [
            {title:"id",dataIndex:"id"},
            {title:"name",dataIndex:"name"},
            {title:"sex",dataIndex:"sex"},
            {title:"age",dataIndex:"age"},
            {
                title:"single",dataIndex:"single",
                render:(single,obj)=>(<div>{single?"单身狗":"恩爱狗"}</div>)
            }
            ]

var antd = React.createClass({
    getInitialState(){
        return {
            items:[],
            loading:true,
            showModal:false,
            name:"",
            age:"",
            sex:"",
            single:""
        }
    },
    render(){
        
        return (
            <div>
                <Button onClick={()=>this.setState({showModal:true})}>增加</Button>
                <Button>修改</Button>
                <Button>删除</Button>
                <br/><br/>
                <Table loading={ this.state.loading } columns={hr} 
                dataSource={this.state.items} />
                <Modal 
                    title="新增学生列表"
                    visible={this.state.showModal}
                    onCancel={()=>this.setState({showModal:false})}
                    onOk = {this.save}
                >
                    <Form>
                        <Form.Item
                         label="姓名"
                         labelCol ={{span:2}}
                         wrapperCol = {{span:22}}
                        >
                           <Input value={this.state.name} 
                           onChange={(e)=>this.change(e.target.value,'name')} />
                        </Form.Item>
                         
                    </Form>
                    <Form>
                        <Form.Item
                         label="年龄"
                         labelCol ={{span:2}}
                         wrapperCol = {{span:22}}
                        >
                           <Input value={this.state.age} 
                           onChange={(e)=>this.change(e.target.value,'age')} />
                        </Form.Item>
                         
                    </Form>

                    <Form>
                        <Form.Item
                         label="性别"
                         labelCol ={{span:2}}
                         wrapperCol = {{span:22}}
                        >
                            <RadioGroup defaultValue="男"
                            onChange={(e)=>this.change(e.target.value,'sex')}
                             size="large">
                                <RadioButton value={'男'}>男</RadioButton>
                                <RadioButton value={'女'}>女</RadioButton>
                            </RadioGroup>
                        </Form.Item>
                         
                    </Form>

                    <Form>
                        <Form.Item
                         label="婚姻"
                         labelCol ={{span:2}}
                         wrapperCol = {{span:22}}
                        >
                            <RadioGroup
                            onChange={(e)=>this.change(e.target.value,'single')}
                             defaultValue="true" size="large">
                                <RadioButton value={"单身狗"}>单身狗</RadioButton>
                                <RadioButton value={"恩爱狗"}>恩爱狗</RadioButton>
                            </RadioGroup>
                        </Form.Item>
                         
                    </Form>
                </Modal>
            </div>
        )
    },
    save(){
        var data ={
            name:this.state.name,
            sex:this.state.sex,
            age:this.state.age,
            single:this.state.single
        }
        // ajax
        //     .post(api)
        //     .send(data)
        //     .end(function(err,obj){
        //         console.log(obj.body)
        //     })
    },
    change(e,key){
        var val = e,
            obj = {};
        obj[key] = e;
        this.setState(obj)
    },
    componentDidMount(){
        var _this = this;
        this.setState({
            loading:true
        })
        
        this.setState({
            items:[],
            loading:false
        })
        // ajax
        //     .get(api)
        //     .end(function(err,data){
        //         if(err)return err;
        //         var item = data.body.map(function(o,key){
        //             o.key = o.id
        //             return o;
        //         })
        //         _this.setState({
        //             items:item,
        //             loading:false
        //         })
        //     })
    }
})
export default antd;