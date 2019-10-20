import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react'
import { Card } from 'antd';
import './introduction.less'

// 从后台获取
// todo
const labelData = [
  { value: 335, name: '正常患者' },
  { value: 310, name: '多动症患者' },
  { value: 234, name: '未标注数据' },
]
class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelData: [],
    }
  }

  componentDidMount() {
    this.setState({
      labelData: labelData
    })
  }

  getOption = (data) => {
    return {
      title: {
        text: '标注现状统计',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['正常患者', '多动症患者', '未标注数据']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: this.state.labelData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  render() {
    return (
      <div className="introduction-main-container">
        <Card title='柱状图一'>
          <ReactEcharts option={this.getOption(this.state.labelData)}></ReactEcharts>
        </Card>
        <div className="text">
          <Card className="text-left">
            <h2>数据采集系统介绍</h2>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </Card>
          <Card className="text-right">
            <h2>标注步骤介绍</h2>
            <p>标注步骤介绍</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </Card>
        </div>
        <div className="text">
          <Card className="text-left">
            <h2>数据采集系统介绍</h2>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </Card>
          <Card className="text-right">
            <h2>标注步骤介绍</h2>
            <p>标注步骤介绍</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </Card>
        </div>

        <div className="text">
          <Card className="text-left">
            <h2>数据采集系统介绍</h2>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </Card>
          <Card className="text-right">
            <h2>标注步骤介绍</h2>
            <p>标注步骤介绍</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </Card>
        </div>
        <div className="text">
          <Card className="text-left">
            <h2>数据采集系统介绍</h2>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </Card>
          <Card className="text-right">
            <h2>标注步骤介绍</h2>
            <p>标注步骤介绍</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </Card>
        </div>



      </div>
    );
  }
}

export default Introduction;