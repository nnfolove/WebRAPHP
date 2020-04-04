import React from "react";
import "../App.css";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 1
    };
  }

  ShowAlter(){
    alert("Click rồi nè! ")
  }

  componentDidMount = () => {};

  render() {
    return (
      <div>
        Xin chào mọi người! I'm SABO
      </div>
    );
  }
}
