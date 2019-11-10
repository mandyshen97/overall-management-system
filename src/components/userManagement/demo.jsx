import React, { Component } from "react";
import { Modal,Button, Card } from "antd";
class Demo extends Component {
  constructor() {
    super();
    this.state = {
      visiable: true
    };
  }

  render() {
    return (
      <div>
        <button>按钮</button>
        <Button>anan</Button>
        <Card/>
        {/* <Modal title="title" visible={this.state.visiable}></Modal> */}
      </div>
    );
  }
}
export default Demo;
