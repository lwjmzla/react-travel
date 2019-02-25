import React from 'react'
import { Card, Button, Icon, Radio, Form, Input, message, Checkbox } from 'antd';
const FormItem = Form.Item
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  handleSubmit = (ev) => {
    let userInfos = this.props.form.getFieldsValue() // 获取值
    // ! this.props.form.validateFields(['username'],(err, value) => {     只校验某个值
    this.props.form.validateFields((err, value) => {
      if (!err) {
        message.success('校验成功')
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline" >
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录垂直表单">
          <Form style={{width: 300}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min: 5,
                      max: 10,
                      message: '长度5-10'
                    },
                    {
                      pattern: /^\w+$/g, // new RegExp(str+"$");  这个形式
                      message: '只要字母数字'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem>
            {
              getFieldDecorator('pwd', {
                initialValue: 'asda',
                rules: []
              })(
                <Input prefix={<Icon type="lock" />}  placeholder="请输入密码" />
              )
            }
            </FormItem>
            <FormItem>
            {
              getFieldDecorator('rember', {
                initialValue: true,
                valuePropName: 'checked'
              })(
                <Checkbox>记住密码</Checkbox>
              )
            }
            <a href="#111" style={{float: 'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
// ! 绑定数据
export default Form.create()(Login)