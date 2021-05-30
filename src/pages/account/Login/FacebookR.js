import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';


export default class FacebookR extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  responseLogout = response => {
    this.setState({
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    });
  };
  componentClicked = () => console.log("clicked");
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            padding: "20px",
            border: "3% "
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
              Email: {this.state.email}
              <br />
              <br />
          <button onClick={this.responseLogout} >Log Out</button>
        </div>
      );
    } else {
      fbContent = (
        <div>
        <FacebookLogin
          appId="481426109774195"
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
        </div>
      );
    }
    return (
      <>
      
        <div>{fbContent}</div>
        
      </>
    )
  }
}