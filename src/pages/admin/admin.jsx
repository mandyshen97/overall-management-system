import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd'
import LeftNav from './../../components/left-nav/LeftNav';
import Header from '../../components/header/Header'
import Introduction from '../../components/introduction/Introduction';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './../../components/home/Home';
import LabelDataList from './../../components/collection/label-data-list/LabelDataList';
import DataCollection from './../../components/collection/data-collection/DataCollection';
import Assist from './../../components/assist/Assist';
import './admin.less'
import MyBreadcrumb from './../../components/breadcrumb/MyBreadcrumb';

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
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height: '100vh'}} className="sider">
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <MyBreadcrumb></MyBreadcrumb>
          <Content>
            <Switch>
              <Redirect from='/' exact to='/home'/>
              <Route path='/home' component={Home}/>
              <Route path='/collection/introduction' component={Introduction}/>
              <Route path='/collection/data-collection' component={DataCollection}/>
              <Route path='/collection/label-data-list' component={LabelDataList}/>
              <Route path='/assist' component={Assist}/>
              <Route path='/introduction' component={Introduction}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Admin