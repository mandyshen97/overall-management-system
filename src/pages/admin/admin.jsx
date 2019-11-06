import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd'
import LeftNav from './../../components/left-nav/LeftNav';
import Header from '../../components/header/Header'
import Introduction from '../../components/introduction/Introduction';
import { Switch, Redirect, Route, HashRouter } from 'react-router-dom';
import Home from './../../components/home/Home';
import LabelDataList from './../../components/collection/label-data-list/LabelDataList';
import DataCollection from './../../components/collection/data-collection/DataCollection';
import Assist from './../../components/assist/Assist';
import './admin.less'
import InformationManagement from './../../components/management/InformationManagement';

const { Footer, Sider, Content } = Layout
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ height: '100vh' }} className="sider">
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Breadcrumb className='my-breadcrumb'>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <Switch>
              <Redirect from='/' exact to='/home' />
              <Route path='/home'  component={Home} />
              <Route path='/informationManagement'  component={InformationManagement} />
              <Route path='/introduction' component={Introduction} />
              <Route path='/assist' component={Assist} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Admin