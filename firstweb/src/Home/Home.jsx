import React from "react";
import "../App.css";
import Header from './Header'
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 1
    };
  }

  promiseImage = path => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = () => resolve(img.width);
      img.onerror = () => reject("Lỗi");
      img.src = path;
    });
  };

  loadImage = path => {
    var check = false;
    var ext = "";
    var arrExt = [".jpg", ".png", ".jpeg"];
    arrExt.forEach(item => {
      this.promiseImage(path + item).then(width => {
        if (width > 0) {
          check = true;
          ext = item;
        }
      });
    });

    return { check: check, ext: ext };
  };
  
  clickButton=()=>{
    this.refs.Header.ShowAlter();
    this.props.dispatch({type: 'plus'})
  }

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <Header ref='Header'></Header>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {count: state.count}
}

export default connect(mapStateToProps)(Home);
