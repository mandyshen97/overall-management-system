import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import './my-breadcrumb.less'
class MyBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Breadcrumb className='my-breadcrumb'>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default MyBreadcrumb;