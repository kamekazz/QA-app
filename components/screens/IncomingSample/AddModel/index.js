import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { ContainerEl } from "../../../../style/element";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";

export class index extends Component {
  render() {
    return <ContainerEl></ContainerEl>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
