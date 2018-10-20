import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "okada", old: 0 };
  }

  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <h3>My name is {this.state.name}</h3>
        <h3>I'm from {this.props.from}</h3>
        <h3>{this.state.old} years old</h3>
        <input type="button" value="ハピバ" onClick={this.onClickButton} />
      </div>
    );
  }

  onClickButton = () => {
    let afterOld = this.state.old + 1;
    this.setState({ old: afterOld });
  };
}

render(<Human from="Hiroshima" />, document.getElementById("root"));
