import React, { Component } from 'react'

 class Person extends Component {


  state = {
    imgSrc: 'https://www.w3schools.com/howto/img_avatar.png',
    fullName: "Ettaieb Amine",
    bio: "I'm  studying web developer skills",
    profession: " Full-Stack Web developer",
    
  }

  render() {
    return (
      <div
      style={{
        backgroundColor: "ButtonFace",
        border: "outset 13px linen",
        boxShadow: "2px 2px 20px 23px #cfe1f7",
        width: "550px",
        margin: "20px auto ",
      }}  >
      <img
        src={this.state.imgSrc}
        alt="Photo Profile"
        style={{
          width: 325,
          height: 325,
          borderRadius: "50%",
          boxShadow: "1px 2px 15px 13px silver",
        }}
      />
      <h1> {this.state.fullName}</h1>
      <h2>{this.state.profession}</h2>
      <h4>{this.state.bio}</h4>
    </div>
    )
  }
}

export default Person;