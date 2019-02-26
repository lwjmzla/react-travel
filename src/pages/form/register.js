import React from 'react'
import moment from 'moment'
import dayjs from 'dayjs'
import { Row, Col, Card, Button, Icon, Form, Input, message, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, InputNumber, Modal } from 'antd';
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;
class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }]
    }
  }
  handleSubmit = (ev) => {
    let userInfos = this.props.form.getFieldsValue() // 获取值
    console.log(userInfos)
    console.log(dayjs(userInfos.birth).format('YYYY-MM-DD HH:mm:ss'))
    this.props.form.resetFields()
    // ! this.props.form.validateFields(['username'],(err, value) => {     只校验某个值
    this.props.form.validateFields((err, value) => {
      if (!err) {
        message.success('校验成功')
      }
    })
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    console.log(fileList)
    this.setState({ fileList })
  }

  beforeUpload =(file) => {
    console.log(file)
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 }, // <576   占一行
        sm: { span: 4 }  //  > 576
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
    const formItemOffset = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12, offset: 4 }
      }
    }
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem {...formItemLayout} label="用户名">
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
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="密码">
            {
              getFieldDecorator('pwd', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: '密码不能为空'
                  }
                ]
              })(
                <Input.Password placeholder="请输入密码" />
              )
            }
            </FormItem>
            <FormItem {...formItemLayout} label="性别">
            {
              getFieldDecorator('sex', {
                initialValue: 'male',
                rules: [
                ]
              })(
                <RadioGroup>
                  <Radio value={'male'}>男</Radio>
                  <Radio value={'female'}>女</Radio>
                </RadioGroup>
              )
            }
            </FormItem>
            <FormItem {...formItemLayout} label="年龄">
              {
                getFieldDecorator('age', {
                  initialValue: 18,
                  rules: [
                  ]
                })(
                  <InputNumber min={1} max={150}  />
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="当前状态">
              {
                getFieldDecorator('state', {
                  initialValue: '',
                  rules: [
                  ]
                })(
                  <Select>
                    <Option value="">请选择</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="爱好">
              {
                getFieldDecorator('hobby', {
                  // initialValue: '',
                  rules: [
                  ]
                })(
                  <Select mode="multiple">
                    <Option value="玩1">玩1</Option>
                    <Option value="玩2">玩2</Option>
                    <Option value="玩3">玩3</Option>
                    <Option value="玩4">玩4</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="是否已婚">
              {
                getFieldDecorator('married', {
                  initialValue: true,
                  valuePropName: 'checked',
                  rules: [
                  ]
                })(
                  <Switch />,
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="生日">
              {
                getFieldDecorator('birth', {
                  rules: [
                  ]
                })(
                  <DatePicker placeholder="选择日期" format="YYYY-MM-DD" />
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="联系地址">
              {
                getFieldDecorator('address', {
                  initialValue: 'asddddddd',
                  rules: [
                  ]
                })(
                  <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="起床时间">
              {
                getFieldDecorator('getUpTime', {
                  rules: [
                  ]
                })(
                  <TimePicker format="HH:mm" />
                )
              }
            </FormItem>
            <FormItem {...formItemLayout} label="头像">
              {
                getFieldDecorator('avatar', {
                  rules: [
                    {
                      required: true,
                      message: '头像不能为空'
                    }
                  ]
                })(
                  <div>
                    <Upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                      beforeUpload={this.beforeUpload}
                    >
                      {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </div>
                )
              }
            </FormItem>
            <FormItem {...formItemOffset}>
            {
              getFieldDecorator('read', {
                initialValue: true,
                valuePropName: 'checked'
              })(
                <Checkbox>我已阅读<a href="#111" >XX协议</a></Checkbox>
              )
            }
            </FormItem>
            <FormItem {...formItemOffset}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
// ! 绑定数据
export default Form.create()(Register)