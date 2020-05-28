import React, { Component } from "react";
import styled from "styled-components/native";

class Avatar extends Component {
  state = {
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": "eeaafbe81657073cd70ac6e3de1bd6",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photo: response[0].photo,
        });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;
