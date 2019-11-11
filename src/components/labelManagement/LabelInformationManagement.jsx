import React, { Component, Fragment } from "react";
import "./label-information-management.less";
import { Line, Bar } from "echarts-for-react";
import { getAge } from "../../config/dateConfig";
import {
  Row,
  Col,
  DatePicker,
  Button,
  Card,
  Table,
  Icon,
  Form,
  Input,
  Tabs,
  Tag,
  Divider,
  Tooltip,
  Select
} from "antd";
import moment from "moment";
import API from "../../api/api";

const { TabPane } = Tabs;
const { Option } = Select;
const dateFormat = "YYYY/MM/DD";
const initTime = [moment().subtract(7, "days"), moment().subtract(1, "days")];

const wcstItem = [
  { label: "单纯性失眠", value: 1 },
  { label: "伴过度觉醒", value: 2 },
  { label: "伴焦虑", value: 3 },
  { label: "伴抑郁", value: 4 },
  { label: "正常", value: 0 }
];

class LabelInformationManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: initTime,
      modalVisible1: false, // 个人采集信息表单的视觉信息
      modalVisible2: false, // 任务采集信息表单
      modalVisible3: false, // 临床信息采集表单
      modalVisible4: false, // 采集信息总体描述
      modalVisible5: false, // 采集数据存储关联
      edit: false,
      currentRecordId: -1,
      currentUserName: "undefined",
      tableData: []
    };
  }

  componentDidMount() {
    API.InquirePatientTaskList({}).then(res => {
      console.log(res.data);
      let newTableData = [];
      res.data.map((item, index) => {
        console.log(item.task.time);
        item.key = index;
        item.patient.age = getAge(item.patient.birthday);
        item.patient.testTime = item.task.time;
        if (item.type === 0) {
          item.patient.testType = "WCST";
        }
        if (item.type === 1) {
          item.patient.testType = "睡眠测试";
        }
        newTableData.push(item.patient);
      });
      this.setState(
        {
          tableData: newTableData
        },
        () => {
          console.log(this.state.tableData);
        }
      );
    });
  }
  //重置查询条件
  handleReset = () => {
    this.props.form.resetFields();
    this.setState({
      date: ""
    });
  };
  //查询表单
  renderSearch() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form layout="inline" onSubmit={this.handleSearchSubmit}>
        <Form.Item>
          {getFieldDecorator("patientID", {})(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="患者编号"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("patientName", {})(
            <Input
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
              // onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
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
        <Form.Item>
          {getFieldDecorator("date", {})(
            <DatePicker
              onChange={(date, dateString) =>
                this.handleDateSearch(date, dateString)
              }
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询任务信息
          </Button>
          <Button style={{ marginLeft: "20px" }} onClick={this.handleReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    );
  }
  columns = [
    {
      title: "患者姓名",
      dataIndex: "name",
      width: "7%"
    },
    {
      title: "唯一编号",
      width: "7%",
      render: record => {
        return <span>{record.medId}</span>;
      }
    },
    {
      title: "患者性别",
      dataIndex: "gender",
      width: "7%",
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
      width: "7%"
    },
    {
      title: "患病类型",
      dataIndex: "wcstType",
      width: "7%",
      render: text => {
        const item = wcstItem.find(v => v.label === text);
        if (!item) {
          return <Tag color="#2db7f5">{"未诊断"}</Tag>;
        } else {
          return <Tag color="#2db7f5">{item.label}</Tag>;
        }
      }
    },
    {
      title: "主治医生",
      dataIndex: "doctorName",
      width: "10%"
    },
    {
      title: "测试时间",
      dataIndex: "testTime",
      width: "10%"
    },
    {
      title: "任务类型",
      dataIndex: "testType",
      width: "10%"
    },
    {
      title: "采集信息汇总展示",
      width: "15%",
      render: (text, record) => {
        return (
          <Fragment>
            <Row type="flex" justify="center">
              <Tooltip title="采集信息展示">
                <span
                  onClick={() => this.handleClick(true, record, "description")}
                >
                  <Icon type="edit" />
                  <span style={{ marginLeft: "5px" }}>采集信息展示</span>
                </span>
              </Tooltip>
            </Row>
          </Fragment>
        );
      }
    },
    {
      title: "添加/修改采集信息",
      width: "30%",
      render: (text, record) => {
        return (
          <Fragment>
            {/* <Tooltip title="个人采集信息">
                            <Icon type="edit" onClick={ () =>this.handleClick(true, record, 'personalInfo')}/>
                        </Tooltip>
                        <Divider type='vertical' /> */}
            <Tooltip title="数据存储关联">
              <span onClick={() => this.handleClick(true, record, "dataPath")}>
                <Icon type="dropbox" />
                <span style={{ marginLeft: "5px" }}>数据存储关联</span>
              </span>
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="任务测试信息">
              <span
                onClick={() => this.handleClick(true, record, "missionInfo")}
              >
                <Icon type="apple" />
                <span style={{ marginLeft: "5px" }}>更新任务测试信息</span>
              </span>
            </Tooltip>
            {/* <Divider type='vertical' />
                        <Tooltip title="临床信息采集">
                            <Icon type="codepen-circle" onClick={ () =>this.handleClick(true, record, 'clinicalInfo')}/>
                        </Tooltip> */}
          </Fragment>
        );
      }
    }
  ];
  render() {
    return (
      <div className="main-content">
        {this.renderSearch()}
        <Card title="标注信息统计图表" style={{ marginTop: 15 }}>
          <Tabs animated={false} style={{ textAlign: "right" }}>
            <TabPane
              tab={<Icon type="bar-chart" />}
              key="1"
              style={{ textAlign: "left" }}
            >
              {/* <Bar seriesLayoutBy={'column'}   /> */}
            </TabPane>
            <TabPane
              tab={<Icon type="pie-chart" />}
              key="2"
              style={{ textAlign: "left" }}
            >
              {/* <Line seriesLayoutBy={'column'}  /> */}
            </TabPane>
          </Tabs>
        </Card>
        <Table
          style={{ marginTop: "24px" }}
          bordered
          columns={this.columns}
          dataSource={this.state.tableData}
        />
      </div>
    );
  }
}

export default Form.create()(LabelInformationManagement);
