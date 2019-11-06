import React, { Component } from 'react';
import { Input, Tooltip, Icon, Button, Select, Table } from 'antd'
import './information-management.less'

const { Option } = Select

class InformationManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleDoctorChange = () => {
    //todo
    console.log('doctorChange')
  }
  handleTypeChange = () => {
    //todo
  }
  render() {
    return (
      <div className="main-content">
        <div className="query">
          <div className="flex-query">
            <div className="flex-search">
              <span className="input-text">
                患者编号
              </span>
              <Input placeholder='患者编号'
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </div>
            <div className="flex-search">
              <span className="input-text">
                患者姓名
              </span>
              <Input placeholder='患者姓名'
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </div>
            <div className="flex-search">
              <span className="input-text">
                选择医生
              </span>
              <Select placeholder='选择医生' style={{ width: 120 }}
                onChange={this.handleDoctorChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled> Disabled </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="flex-search">
              <span className="input-text">
                选择失眠类型
              </span>
              <Select placeholder='选择失眠类型' style={{ width: 120 }}
                onChange={this.handleTypeChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled> Disabled </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div className="query-button-group">
            <Button className='query-button' type='primary'>查询</Button>
            <Button className='reset-button' style={{marginLeft: '10px'}}>重置</Button>
          </div>
        </div>
        <Button type='primary' className='new-information-button'>新建患者个人信息</Button>
        <div className="information-tabel-content">
          <Table bordered></Table>
        </div>
      </div>
    );
  }
}

export default InformationManagement;