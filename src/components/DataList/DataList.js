import React, { Component } from "react";
import Home from "../";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    let king = "king";
    const url =
      "https://rest.bandsintown.com/artists/" + { king } + "?app_id=test";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div>{this.state.loading ? <h4>Loading...</h4> : <h3>person...</h3>}</div>
    );
  }
}

export default List;
