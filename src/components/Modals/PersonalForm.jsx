import React, { Component } from "react";
import { Modal, Form, Input, Select, Button, Message } from "antd";
import API from "../../api/api";

const { Option } = Select;
const ADHDItem = [
  { label: "单纯性失眠", value: 1 },
  { label: "伴过度觉醒", value: 2 },
  { label: "伴焦虑", value: 3 },
  { label: "伴抑郁", value: 4 },
  { label: "正常", value: 0 }
];
class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        age: "",
        gender: undefined,
        weight: "",
        height: "",
        name: "",
        adhdType: undefined,
        doctorId: ""
      }
    };
  }

  componentDidMount() {
    const { edit, currentRecordId} = this.props;
    // 从后台获取数据
    if(edit){
      // API.
      // todo
    }
  }

  // 提交个人信息到数据库
  handlePersonInfoSubmit = e => {
    //阻止表单提交默认事件
    e.preventDefault();
    //验证
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) return;
      if (!err) {
        // 验证成功，则用表单里的数据更改state
        this.setState(
          {
            personInfo: { ...values }
          },
          () => {
            debugger
            console.log(this.state)
            this.props.handleModalVisible(false, "personalInfo");
            // API.patientRegister({
            //   ...this.state.personInfo
            // }).then(res => {
            //   console.log(res);
            //   Message.success("新建患者个人信息成功");
               // todo
            // });
          }
        );
        const { handleModalVisible, edit, currentRecordId } = this.props;
      }
    });

    //todo
  };

  // 个人信息采集的表单
  renderPersonalInfoForm = () => {
    const { getFieldDecorator } = this.props.form;
    const { personInfo } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handlePersonInfoSubmit}>
        <Form.Item label="患者姓名">
          {getFieldDecorator("name", {
            initialValue: personInfo.name,
            rules: [
              {
                required: true,
                message: "请选择一个用户"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="患者性别">
          {getFieldDecorator("gender", {
            initialValue: personInfo.gender
          })(
            <Select>
              <Option value={1}>男</Option>
              <Option value={0}>女</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="患者年龄">
          {getFieldDecorator("age", {
            initialValue: personInfo.age
          })(<Input />)}
        </Form.Item>
        <Form.Item label="患者体重(kg)">
          {getFieldDecorator("weight", {
            initialValue: personInfo.weight
          })(<Input />)}
        </Form.Item>
        <Form.Item label="患者身高(cm)">
          {getFieldDecorator("height", {
            initialValue: personInfo.height
          })(<Input />)}
        </Form.Item>
        <Form.Item label="患者患病类型">
          {getFieldDecorator("adhdType", {
            initialValue: personInfo.adhdType
          })(
            <Select placeholder="请选择患者患病类型">
              {ADHDItem.map((item, index) => (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="主治医生">
          {getFieldDecorator("doctorId", {
            initialValue: personInfo.doctorId
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            更新采集个人信息
          </Button>
        </Form.Item>
      </Form>
    );
  };

  render() {
    return (
      <Modal
        visible={this.props.modalVisible}
        title="个人信息采集"
        width="60%"
        onCancel={() => this.props.handleModalVisible(false, "personalInfo")}
        footer={[
          <Button
            key="back"
            onClick={() => this.props.handleModalVisible(false, "personalInfo")}
          >
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={this.handlePersonInfoSubmit}>
            确定
          </Button>
        ]}
      >
        {this.renderPersonalInfoForm()}
      </Modal>
    );
  }
}
export default Form.create()(PersonalForm);
