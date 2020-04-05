import React from "react";
import "../App.css";
import { Modal, Button, Row, Col } from "antd";
import ModalLogin from '../Login/ModalLogin'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 1,
      visibleModal: false,
      mode: 'Login'
    };
  }

  ShowAlter() {
    alert("Click rồi nè! ");
  }

  componentDidMount = () => {};

  openModalRegister = () => {
    this.setState({ visibleModal: true, mode: 'Register' });
  };

  openModalLogin = () => {
    this.setState({ visibleModal: true, mode: 'Login' });
  };

  onCancel =()=>{
    this.setState({ visibleModal: false });
  }

  render() {
    return (
      <div>
        <Row className="pull-right">
          <Col>
            <Button className="pull-right" onClick={this.openModalRegister} style={{marginLeft: 3}}>Đăng Ký</Button>
            <Button type="primary" onClick={this.openModalLogin}>
              Đăng Nhập
            </Button>
          </Col>
        </Row>
        <ModalLogin
          visible={this.state.visibleModal}
          mode={this.state.mode}
          onCancel={this.onCancel}
        >
        </ModalLogin>
      </div>
    );
  }
}
