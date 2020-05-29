import React, { Component } from "react";

import { connect } from "react-redux";
import { ContainerEl, TextEl } from "../../../../style/element";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { COLORS } from "../../../../constants/Colors";
import { View, StyleSheet } from "react-native";

data = {
  questions: ["", "", "", "", "", "", "", "", "", ""],
};

export class index extends Component {
  render() {
    return (
      <Container>
        <View style={StyleSheet.absoluteFill}></View>
        <OptionBottom onPress={this.handleAnswer} activeOpacity={0.7}>
          <AnswerText>NO</AnswerText>
        </OptionBottom>
        <OptionBottom onPress={this.handleAnswer} activeOpacity={0.7}>
          <AnswerText>YES</AnswerText>
        </OptionBottom>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);

const Container = styled.View`
  flex-direction: row;
  flex: 1;
`;

const OptionBottom = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const AnswerText = styled(TextEl)`
  font-size: 30px;
  margin-bottom: 50px;
`;
