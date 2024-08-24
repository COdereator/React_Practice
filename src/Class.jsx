import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      language: "Hello",
      hours: 1,
    };
  }

  namechange = () => {
    console.log(this.state);
    this.setState({ language: "Hacker", hours: 10101 }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <h1>
          <i>
            I am learning {this.state.language} from {this.state.hours} Hours
          </i>
          <br />
          <button onClick={this.namechange}>Click Me</button>
        </h1>
      </div>
    );
  }
}

export default Class;
