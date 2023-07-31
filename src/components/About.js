import React from "react";
import "./About.css";
import Student from "./Student";

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Waleed",
    };
  }
  render() {
    console.log(this.props);
    return (
      <div className="about">
        <h1>Props and State Concepts</h1>
        <p>
          The Paragraphs module in Drupal provides editors with a component
          driven architecture for building pages. Morpht has been developing
          Paragraph approaches to site building since 2015. This case study
          captures some of the content from a Drupal 7 "Paragraphs Demo" site
          which was built to showcase what could be done with Paragraphs.
        </p>
        <div className="about">
          <center>
            <Student
              name={this.state.name}
              email={"waleed@gmail.com"}
              text={"I passed a new props"}
            />
          </center>
          <div className="about_button">
            <button onClick={() => this.setState({ name: "Siddiqui" })}>
              Update Name
            </button>
          </div>
        </div>
        ;
      </div>
    );
  }
}
