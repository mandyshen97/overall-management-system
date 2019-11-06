import React, { Component } from 'react';
import { Input, Icon, Button, Select, Table, Modal } from 'antd'
import './user-information-management.less'

const { Option } = Select

class InformationManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informationModalVisiable: false
    }
  }
  handleDoctorChange = () => {
    //todo
    console.log('doctorChange')
  }
  handleTypeChange = () => {
    //todo
  }
  handleInformationSubmit = () => {
    //todo
    this.hideInformationModal()
  }
  hideInformationModal = () => {
    this.setState({
      informationModalVisiable: false
    })
  }
  showInformationModal = () => {
    this.setState({
      informationModalVisiable: true
    })
  }
  handleGenderChange = () => {
    //todo
  }
  handleIllnessChange = () => {
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
              <Select placeholder='选择失眠类型'
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
            <Button className='reset-button' style={{ marginLeft: '10px' }}>重置</Button>
          </div>
        </div>
        <Button type='primary' className='new-information-button' onClick={this.showInformationModal}>新建患者个人信息</Button>
        <div className="information-tabel-content">
          <Table bordered></Table>
        </div>
        <Modal
          title='个人信息采集'
          visible={this.state.informationModalVisiable}
          okText="确认"
          cancelText="取消"
          onOk={this.handleInformationSubmit}
          onCancel={this.hideInformationModal}
        >
          <div className="input-block">
            <div className="input-block-item">
              <span className="input-text user-name">患者姓名：</span>
              <Input />
            </div>
            <div className="input-block-item">
              <span className="input-text">患者性别：</span>
              <Select placeholder='选择患者性别'
                onChange={this.handleGenderChange}>
                <Option value="0">男</Option>
                <Option value="1">女</Option>
              </Select>
            </div>
            <div className="input-block-item">
              <span className="input-text">患者年龄：</span>
              <Input />
            </div>
            <div className="input-block-item">
              <span className="input-text">患者体重(kg)：</span>
              <Input />
            </div>
            <div className="input-block-item">
              <span className="input-text">患者身高(cm)：</span>
              <Input />
            </div>
            <div className="input-block-item">
              <span className="input-text">患者患病类型：</span>
              <Select placeholder='选择患者患病类型'
                onChange={this.handleIllnessChange}>
                <Option value="0">男</Option>
                <Option value="1">女</Option>
              </Select>
            </div>
            <div className="input-block-item">
              <span className="input-text">主治医生：</span>
              <Input />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default InformationManagement;