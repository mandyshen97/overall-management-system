import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  Form,
  Modal,
  Row,
  Typography,
  Select,
  Divider,
  DatePicker,
  TimePicker,
  Button
} from "antd";
const { Option } = Select;
const { Title } = Typography;
class MissionInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionFormData: {
        testTime: undefined, //测试时间
        testType: undefined, //测试类型，一共两类：WCST或者整晚
        medicine: undefined, //测试前服用的药物
        timeAfterMed: undefined, //吃完药之后多久进行测试
        otherInter: undefined //非药物干预
      }
    };
  }

  handleMissionSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) return;
      if (!err) {
        // 调用哪个接口？？
        // todo
      }
      this.props.handleModalVisible(false, "missionBasicInfo");
    });
  };

  renderForm = () => {
    const { missionFormData } = this.state;
    const { getFieldDecorator } = this.props.form;
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
    const medicine = [
      "SSRI",
      "SNRI",
      "NaSSA",
      "TCA",
      "SARI",
      "BZ",
      "PAM",
      "Li",
      "SDA",
      "DPA",
      "无"
    ];
    return (
      <Form {...formItemLayout} onSubmit={this.handleMissionSubmit}>
        <Row justify="start" type="flex">
          <Title level={4}>测试基本信息填写</Title>
        </Row>
        <Divider />
        <Form.Item label="测试时间">
          {getFieldDecorator("testTime", {
            initialValue: missionFormData.testTime
          })(<DatePicker style={{ width: 200 }} />)}
          <TimePicker
            style={{ width: 200 }}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
        <Form.Item label="选择测试类型">
          {getFieldDecorator("testType", {
            initialValue: missionFormData.testType
          })(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="选择测试类型"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="type1">WCST</Option>
              <Option value="type2">测量整晚</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="测试前服用药物">
          {getFieldDecorator("medicine", {
            initialValue: missionFormData.medicine
          })(
            <Select
              showSearch
              style={{ width: 200 }}
              mode="multiple"
              placeholder="选择药物"
              initialValue={["SSRI", "SNRI"]}
            >
              {medicine.map((item, index) => (
                <Option key={index}>{item}</Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Form.Item label="服药后多久进行测试(h)">
          {getFieldDecorator("timeAfterMed", {
            initialValue: missionFormData.timeAfterMed
          })(
            <TimePicker
              style={{ width: 200 }}
              initialValue={moment("1", "hh")}
              format={"hh"}
            />
          )}
        </Form.Item>
        <Form.Item label="其他干预方式">
          {getFieldDecorator("otherInter", {
            initialValue: missionFormData.otherInter
          })(
            <Select
              mode="multiple"
              style={{ width: 200 }}
              placeholder="选择其他干预方式"
              initislValue={["SSRI", "SNRI"]}
            >
              <Option value="inter1">rTMs</Option>
              <Option value="inter2">CBT-I</Option>
              <Option value="inter0">无</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            添加任务
          </Button>
          <Link to="/informationManagement">
            <Button htmlType="submit" style={{ marginLeft: "20px" }}>
              查看任务
            </Button>
          </Link>
        </Form.Item>
      </Form>
    );
  };

  render() {
    const title = `任务基本信息填写——${this.props.currentRecordId}_${this.props.currentUserName}`;
    return (
      <Modal
        title={title}
        visible={this.props.modalVisible}
        onOk={this.handleMissionSubmit}
        onCancel={() => {
          this.props.handleModalVisible(false, "missionBasicInfo");
        }}
      >
        {this.renderForm()}
      </Modal>
    );
  }
}

export default Form.create()(MissionInfoForm);
