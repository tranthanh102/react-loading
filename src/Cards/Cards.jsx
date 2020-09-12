import React, { Component } from "react";
import "./Cards.scss";

class Cards extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { number: this.props.number };
  }
  componentWillMount() {
    console.log("componentWillMount da chay");
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ number: nextProps.number });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.number < 4) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    console.log("componentDidMount da chay");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate da chay");
  }

  render() {
    console.log("Ham render da duoc chay");
    return (
      <div className="cards col-3">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <button onClick={this.props.onClickBtn}>{this.props.buttonName}</button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default Cards;
