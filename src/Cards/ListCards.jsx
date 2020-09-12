import React, { Component } from "react";
import "./Cards.scss";
import Cards from "./Cards";

class ListCards extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      color: "green",
      buttonName: "click me",
      number: 0,
    };
    // this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleClickBtn = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div className="cards row">
        <Cards
          logo={this.props.logo}
          buttonName={this.state.buttonName}
          number={this.state.number}
          onClickBtn={this.handleClickBtn}
        ></Cards>
        <Cards
          logo={this.props.logo}
          buttonName={this.state.buttonName}
          number={this.state.number}
          onClickBtn={this.handleClickBtn}
        ></Cards>
        <Cards
          logo={this.props.logo}
          buttonName={this.state.buttonName}
          number={this.state.number}
          onClickBtn={this.handleClickBtn}
        ></Cards>
        <Cards
          logo={this.props.logo}
          buttonName="change click1"
          number={this.state.number}
          onClickBtn={this.handleClickBtn}
        ></Cards>

        <div className="col-12">
          <button onClick={this.handleClickBtn}>change button name</button>
        </div>
      </div>
    );
  }
}

export default ListCards;
