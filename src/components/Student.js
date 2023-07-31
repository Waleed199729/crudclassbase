import React from "react";

export default class Student extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("my first props:", this.props.name);
    return (
      <div>
        <h1> Hello Student {this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h3>{this.props.text}</h3>
        {/*this.props.name is getting the name props from the parent component */}
      </div>
    );
  }
}
