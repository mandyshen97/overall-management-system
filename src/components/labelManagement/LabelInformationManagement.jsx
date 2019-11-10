import React, { Component } from "react";
import "./label-information-management.less";
import Demo from "../userManagement/demo";
class LabelInformationManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: true
    };
  }
  render() {
    return (
      <div className="main-content">
        <Demo />
      </div>
    );
  }
}

export default LabelInformationManagement;
