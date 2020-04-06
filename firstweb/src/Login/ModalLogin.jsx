import React from "react";
import "../App.css";
import { Modal, Input, Row, Col } from "antd";

export default class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      userName: "",
      passWord: "",
    };
  }

  handleOk = () => {
    var mode = this.props.mode == "Login" ? true : false;
    var data = {
      mode: mode,
      customerName: this.state.customerName,
      userName: this.state.userName,
      passWord: this.state.passWord,
      createTime: new Date(),
    };
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:8080/WebRAPHP/app/controllers/login.php", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        debugger;
      })
      .catch((error) => console.log("error", error));
  };

  handleCancel = (e) => {
    this.props.onCancel();
  };

  onChange = (e, Name) => {
    if (Name === "userName") {
      this.setState({ userName: e.target.value });
    }
    if (Name === "passWord") {
      this.setState({ passWord: e.target.value });
    }
    if (Name === "customerName") {
      this.setState({ customerName: e.target.value });
    }
  };

  render() {
    var mode = this.props.mode == "Login" ? true : false;
    var title = mode ? "Đăng Nhập" : "Đăng Ký";
    return (
      <Modal
        title={title}
        visible={this.props.visible}
        onOk={this.handleOk}
        okText={title}
        cancelText="Hủy"
        onCancel={this.handleCancel}
        width={350}
      >
        {mode == false && (
          <Row style={{ marginBottom: 5 }}>
            <Col span={5}>
              <span>Họ Tên:</span>
            </Col>
            <Col span={18} style={{ marginLeft: 5 }}>
              <Input
                onChange={(e) => {
                  this.onChange(e, "customerName");
                }}
                value={this.state.customerName}
              ></Input>
            </Col>
          </Row>
        )}
        <Row style={{ marginBottom: 5 }}>
          <Col span={5}>
            <span>Tài Khoản:</span>
          </Col>
          <Col span={18} style={{ marginLeft: 5 }}>
            <Input
              onChange={(e) => {
                this.onChange(e, "userName");
              }}
              value={this.state.userName}
            ></Input>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <span>Mật Khẩu:</span>
          </Col>
          <Col span={18} style={{ marginLeft: 5 }}>
            <Input.Password
              onChange={(e) => {
                this.onChange(e, "passWord");
              }}
              value={this.state.passWord}
            ></Input.Password>
          </Col>
        </Row>
      </Modal>
    );
  }
}
