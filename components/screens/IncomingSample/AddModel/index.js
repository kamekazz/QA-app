import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { connect } from "react-redux";
import { ContainerEl, TextEl } from "../../../../style/element";

export class index extends Component {
  render() {
    return (
      <ContainerEl style={{ backgroundColor: "red" }}>
        <TextEl> AddModel </TextEl>
        <Button title="close" onPress={() => this.props.modelOption(false)} />
      </ContainerEl>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
