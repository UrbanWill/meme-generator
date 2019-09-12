import React, { Component } from "react";
import ReactDOM from "react-dom";

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.randomImgGen = this.randomImgGen.bind(this);
  }

  randomImgGen(event) {
    event.preventDefault();
    let randomizer = Math.floor(Math.random() * this.state.allMemeImgs.length);
    this.setState({ randomImg: this.state.allMemeImgs[randomizer].url });
    console.log(this.state.allMemeImgs[randomizer]);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
        console.log(this.state.allMemeImgs[7]);
      });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />

          <button onClick={this.randomImgGen}>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
