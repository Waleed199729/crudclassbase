import React from "react";
import "./Home.css";
import About from "./About";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    // };
  }
  render() {
    return (
      <>
        <div className="card text-bg-dark border-0">
          <img
            src="/assets/bg1.jpg"
            className="card-img"
            alt="Backgound"
            width="800px"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="home_heading">
              <h5 className="transition_heading card-title display-3 fe-bolder mb-0 ">
                Class Base Component
              </h5>
              <p className="card-text lead fs-2">
                CHECK OUT THE DIFFERENT CONCEPTS
              </p>
            </div>
          </div>
        </div>

        <div className="home_paragraph">
          <center>
            <h2> Class Base Concepts </h2>
          </center>
          <p>
            The Paragraphs module in Drupal provides editors with a component
            driven architecture for building pages. Morpht has been developing
            Paragraph approaches to site building since 2015. This case study
            captures some of the content from a Drupal 7 "Paragraphs Demo" site
            which was built to showcase what could be done with Paragraphs.
          </p>
        </div>
      </>
    );
  }
}
