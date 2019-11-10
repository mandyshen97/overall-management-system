import React, { Component, Fragment } from "react";
import {
  Input,
  Icon,
  Button,
  Select,
  Table,
  Modal,
  Form,
  Row,
  Col,
  Divider,
  Tooltip,
  Tag,
  DatePicker
} from "antd";
import PersonalForm from "./PersonalForm";
import ClinicalForm from './ClinicalForm'
import "./user-information-management.less";
import API from "../../api/api";

const { Option } = Select;
const tableData = [
  {
    key: 0,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 1,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 2,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 3,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 4,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 5,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 6,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 7,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 8,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 9,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  },
  {
    key: 10,
    name: "mandy",
    uniqueNumber: {
      id: 1,
      name: "mandy"
    },
    gender: 0,
    age: 10,
    wcstType: 1,
    doctorId: 101,
    testTime: "timeString",
    testType: "testType"
  }
];

class InformationManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      newPatientModalVisible: false, // 新建患者
      patientScaleModalVisible: false, // 患者量表信息展示
      clinicalModalVisible: false, // 患者临床信息填写
      modalVisible4: false, // 患者基本信息展示
      modalVisible5: false, // 患者任务基本信息填写
      edit: false,
      currentRecordId: -1,
      currentUserName: "undefined",
      informationModalVisiable: false
    };
  }

  componentDidMount() {
    // todo
    // API.getPatientList().then(res=>{
    //   // todo
    //   //将res的数据放进tableData中
    // })
  }

  // 处理查询提交
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values); //{patientId: undefined, patientName: undefined, doctorName: undefined, wcstType: undefined}
        const { date } = this.state;
        let param = {
          medId: values.patientId,
          name: values.patientName,
          doctorName: values.doctorName,
          disId: values.wcstType
        };
        // API.getPatientList(param).then(res=>{
        //   //todo
        // })
      }
    });
  };

  // 处理重置
  handleReset = () => {
    this.props.form.resetFields();
    this.setState({
      date: ""
    });
  };

  handleClick = (flag, record, msg) => {
    console.log('click')
    if (msg === "personalInfo") {
      this.setState({
        edit: true,
        newPatientModalVisible: flag,
        currentRecordId: record.id,
        currentUserName: record.name
      });
    }
    if(msg === "clinicalInfo") {
      this.setState({
          edit: true,
          clinicalModalVisible: flag,
          currentUserName: record.name,
          currentRecordId: record.id,
      });
  }
  };

  // 查询表单
  renderSearch = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="inline" onSubmit={this.handleSearchSubmit}>
        <Form.Item>
          {/* <span className="input-text">患者编号</span> */}
          {getFieldDecorator("patientId", {})(
            <Input
              style={{ width: 200 }}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="患者编号"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("patientName", {})(
            <Input
              style={{ width: 200 }}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="患者姓名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("doctorName", {})(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="选择医生"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="doctor1">医生1</Option>
              <Option value="doctor2">医生2</Option>
              <Option value="doctor3">医生3</Option>
              <Option value="doctor4">医生4</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("wcstType", {})(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="选择失眠类型"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="type1">单纯性失眠</Option>
              <Option value="type2">伴过度觉醒</Option>
              <Option value="type3">伴焦虑</Option>
              <Option value="type4">伴抑郁</Option>
              <Option value="type5">正常</Option>
            </Select>
          )}
        </Form.Item>
        {/* <Form.Item>
          {getFieldDecorator("date", {})(
            <DatePicker
              style={{ width: 200 }}
              placeholder="请选择日期"
              onChange={(date, dateString) =>
                this.handleDateSearch(date, dateString)
              }
            />
          )}
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button style={{ marginLeft: "20px" }} onClick={this.handleReset}>
            重置
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: "20px" }}
            className="new-information-button"
            onClick={() => this.handleModalVisible(true, "personalInfo")}
          >
            新建患者个人信息
          </Button>
        </Form.Item>
      </Form>
    );
  };

  显示弹框;
  handleModalVisible = (flag, msg) => {
    if (msg === "personalInfo") {
      this.setState({
        edit: false,
        newPatientModalVisible: flag
      });
    }
    if(msg === 'clinicalInfo') {
      this.setState({
          edit: false,
          clinicalModalVisible: flag,
      });
  }
  };

  colums = [
    {
      title: "患者姓名",
      dataIndex: "name",
      width: "10%"
    },
    {
      title: "唯一编号",
      dataIndex: "uniqueNumber",
      width: "10%",
      render: record => {
        let number = record.id + "_" + record.name;
        return <span>{number}</span>;
      }
    },
    {
      title: "患者性别",
      dataIndex: "gender",
      width: "10%",
      render: text => {
        const gender = [{ label: 0, value: "女" }, { label: 1, value: "男" }];
        const item = gender.find(v => v.label === text);
        if (item) {
          return <Tag color="red">{item.value}</Tag>;
        }
      }
    },
    {
      title: "患者年龄",
      dataIndex: "age",
      width: "10%"
    },
    {
      title: "患病类型",
      dataIndex: "wcstType",
      width: "10%",
      render: text => {
        const wcstItem = [
          { label: "单纯性失眠", value: 1 },
          { label: "伴过度觉醒", value: 2 },
          { label: "伴焦虑", value: 3 },
          { label: "伴抑郁", value: 4 },
          { label: "正常", value: 0 }
        ];
        const item = wcstItem.find(v => v.value === text);
        if (!item) {
          return <Tag color="#2db7f5">{"未诊断"}</Tag>;
        } else {
          return <Tag color="#2db7f5">{item.label}</Tag>;
        }
      }
    },
    {
      title: "主治医生",
      dataIndex: "doctorId",
      width: "10%"
    },
    // {
    //   title: "测试时间",
    //   dataIndex: "testTime",
    //   width: "10%"
    // },
    // {
    //   title: "任务类型",
    //   dataIndex: "testType",
    //   width: "10%"
    // },
    {
      title: "患者信息展示",
      width: "10%",
      render: (text, record) => {
        return (
          <Fragment>
            <Row type="flex" justify="center">
              <Tooltip title="采集信息展示">
                <div
                  onClick={() => this.handleClick(true, record, "description")}
                >
                  <Icon type="book" />
                  <span
                    style={{
                      cursor: "pointer",
                      marginLeft: "5px",
                      lineHeight: "1"
                    }}
                  >
                    编辑
                  </span>
                </div>
              </Tooltip>
            </Row>
          </Fragment>
        );
      }
    },
    {
      title: "添加/修改采集信息",
      width: "40%",
      render: (text, record) => {
        return (
          <Fragment>
            <Tooltip title="个人采集信息">
              <Icon
                type="edit"
                style={{ justifyContent: "center" }}
                onClick={() => this.handleClick(true, record, "personalInfo")}
              />
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  lineHeight: "1"
                }}
              >
                个人
              </span>
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="临床信息采集">
              <Icon
                type="codepen-circle"
                style={{ justifyContent: "center" }}
                onClick={() => this.handleClick(true, record, "clinicalInfo")}
              />
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  lineHeight: "1"
                }}
              >
                临床
              </span>
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="查看量表信息">
              <Icon
                type="copy"
                style={{ justifyContent: "center" }}
                onClick={() => this.handleClick(true, record, "clinicalInfo")}
              />
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  lineHeight: "1"
                }}
              >
                查看量表
              </span>
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="新建近红外采集信息">
              <Icon
                type="arrow-right"
                style={{ justifyContent: "center" }}
                onClick={() =>
                  this.handleClick(true, record, "missionBasicInfo")
                }
              />
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  lineHeight: "1"
                }}
              >
                新建
              </span>
            </Tooltip>
          </Fragment>
        );
      }
    }
  ];

  render() {
    console.log(this.state.clinicalModalVisible);
    return (
      <div className="main-content">
        {this.renderSearch()}
        <div className="information-tabel-content">
          <Table bordered columns={this.colums} dataSource={tableData}></Table>
        </div>
        {/* 新建患者/个人信息采集弹框 */}
        {this.state.newPatientModalVisible && (
          <PersonalForm
            modalVisible={this.state.newPatientModalVisible}
            handleModalVisible={this.handleModalVisible}
          />
        )}
        {/* 临床信息采集弹框 */}
        {this.state.clinicalModalVisible && (
          <ClinicalForm
            modalVisible={this.state.clinicalModalVisible}
            handleModalVisible={this.handleModalVisible}
            currentRecordId={this.state.currentRecordId}
            currentUserName={this.state.currentUserName}
          />
        )}
      </div>
    );
  }
}
export default Form.create()(InformationManagement);
