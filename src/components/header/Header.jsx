import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './header.less'
import { formateDate } from '../../utils/dateUtils'

import menuList from './../../config/menuConfig';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: formateDate(Date.now()), // 当前时间字符串
      dayPictureUrl: '', // 天气图片url
      weather: '', // 天气的文本
    }
  }

  getTime = () => {
    // 每隔1s获取当前时间, 并更新状态数据currentTime
    this.intervalId = setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({ currentTime })
    }, 1000)
  }

  getWeather = async () => {
    // todo
    // 调用接口请求异步获取数据
    // const {dayPictureUrl, weather} = await reqWeather('北京')
    // // 更新状态
    // this.setState({dayPictureUrl, weather})
  }

  getTitle = () => {
    // 得到当前请求路径
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      // 如果当前item对象的key与path一样,item的title就是需要显示的title
      if (item.key === path) {
        title = item.title
      } else if (item.children) {
        // 如果当前item有子项，在所有子item中查找匹配的
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
        if (cItem) {
          // 如果存在说明匹配成功
          title = cItem.title
        }
      }
    })
    return title
  }

  /**
   * 退出登录
   */
  logout = () => {
    // todo
  }

  componentDidMount() {
    this.getTime()
    this.getWeather()
  }

  /*
  当前组件卸载之前调用
   */
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.intervalId)
  }


  render() {
    const { currentTime, dayPictureUrl, weather } = this.state
    const title = this.getTitle()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎，username</span>
          <span className="logout" onClick={this.logout}>退出</span>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={dayPictureUrl} alt="weather"/>
            <span>{weather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);