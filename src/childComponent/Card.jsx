import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    this.setState({ number: nextProps.number });
    /* if(nextProps.number < this.props.limitNumber) {
      this.setState({ number: nextProps.number });
    } */
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    if (this.state.number < this.props.limitNumber) return true;
    return false;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUpdate() {
    console.log("componentWillUpdate")
  }

  updateState = () => {
    this.setState({ number: this.state.number + 2 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.updateState}>Update State</button>
        <button onClick={this.props.onHandleClick}>
          {this.props.btnNamme1}
        </button>
        <button onClick={this.props.onHandleClickPlus}>
          {this.props.btnNamme1}
        </button>
        <div className="number">{this.state.number}</div>
      </div>
    );
  }
}

export default Card;
