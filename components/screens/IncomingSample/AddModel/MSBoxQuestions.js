import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { COLORS } from "../../../../constants/Colors";
import { H1, H3, H2 } from "../../../../style/element";
import {
  getAlias,
  getImageSalsify,
  getWeightAndCubic,
} from "../../../../Utils/helperFunctions";
import { WINDOW_WIDTH } from "../../../../style/globalStyle";

class MSBoxQuestions extends Component {
  state = {
    renderAliasQuestions: true,
    aliasAnswer: false,
    renderGraphicQuestions: false,
    graphicAnswer: false,
    renderDescriptionQuestions: false,
    descriptionAnswer: false,
    renderWeightCubicQuestions: false,
    weightCubicAnswer: false,
  };

  handleAliasAnswer = (_value) => {
    this.setState({
      renderAliasQuestions: false,
      aliasAnswer: _value,
      renderGraphicQuestions: true,
    });
  };

  renderAliasQuestion = () => {
    return (
      <>
        <QuestionText>Does Alias match the product?</QuestionText>
        <H2 style={{ textAlign: "center" }}>{`(${getAlias(
          this.props.itemData
        )})`}</H2>
        <ActionContainer>
          <Button
            title="no"
            color={COLORS.error}
            onPress={() => this.handleAliasAnswer(false)}
          />
          <Button
            title="yes"
            color={COLORS.secondary}
            onPress={() => this.handleAliasAnswer(true)}
          />
        </ActionContainer>
      </>
    );
  };

  handleGraphicAnswer = (_value) => {
    this.setState({
      renderGraphicQuestions: false,
      graphicAnswer: _value,
      renderDescriptionQuestions: true,
    });
  };
  renderGraphicQuestion = () => {
    return (
      <>
        <QuestionText>
          Does it have the correct graphic match the product on the label?
        </QuestionText>
        <Image
          source={{
            uri: getImageSalsify(this.props.itemData)
              ? getImageSalsify(this.props.itemData)
              : "https://images.salsify.com/image/upload/s---UuFCWWl--/c_limit,cs_srgb,h_600,w_600/zrtedbhc0qwqylmakxda.jpg",
          }}
          style={{
            width: WINDOW_WIDTH,
            height: WINDOW_WIDTH,
            marginBottom: 12,
          }}
        />
        <ActionContainer>
          <Button
            title="no"
            color={COLORS.error}
            onPress={() => this.handleGraphicAnswer(false)}
          />
          <Button
            title="yes"
            color={COLORS.secondary}
            onPress={() => this.handleGraphicAnswer(true)}
          />
        </ActionContainer>
      </>
    );
  };

  handleDescriptionAnswer = (_value) => {
    this.setState({
      renderDescriptionQuestions: false,
      descriptionAnswer: _value,
      renderWeightCubicQuestions: true,
    });
  };

  renderDescriptionQuestion = () => {
    return (
      <>
        <QuestionText>Is the description correct?</QuestionText>
        <H2 style={{ textAlign: "center", marginBottom: 12 }}>
          {this.props.itemData.title.title.values[0].id}
        </H2>
        <ActionContainer>
          <Button
            title="no"
            color={COLORS.error}
            onPress={() => this.handleDescriptionAnswer(false)}
          />
          <Button
            title="yes"
            color={COLORS.secondary}
            onPress={() => this.handleDescriptionAnswer(true)}
          />
        </ActionContainer>
      </>
    );
  };

  handleWeightCubicAnswer = (_value) => {
    this.setState({
      renderDescriptionQuestions: false,
      descriptionAnswer: _value,
    });
  };

  renderWeightCubicQuestions = () => {
    const { resultCubic, resultWeight } = getWeightAndCubic(
      this.props.itemData
    );
    return (
      <View style={{ paddingHorizontal: 3 }}>
        <QuestionText>
          Are the weight and cubic size correct on the label?
        </QuestionText>
        <H2 style={{ textAlign: "center", marginBottom: 12 }}>
          (Cubic:{resultCubic})
        </H2>
        <H2 style={{ textAlign: "center", marginBottom: 12 }}>
          (Weight:{resultWeight})
        </H2>
        <ActionContainer>
          <Button
            title="no"
            color={COLORS.error}
            onPress={() => this.handleDescriptionAnswer(false)}
          />
          <Button
            title="yes"
            color={COLORS.secondary}
            onPress={() => this.handleDescriptionAnswer(true)}
          />
        </ActionContainer>
      </View>
    );
  };

  render() {
    return (
      <Container>
        <H1 style={{ textAlign: "center", marginBottom: 12 }}>
          inspected the label on MS packaging
        </H1>
        {this.state.renderAliasQuestions && this.renderAliasQuestion()}
        {this.state.renderGraphicQuestions && this.renderGraphicQuestion()}
        {this.state.renderDescriptionQuestions &&
          this.renderDescriptionQuestion()}
        {this.state.renderWeightCubicQuestions &&
          this.renderWeightCubicQuestions()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  itemData: state.incoming.item,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MSBoxQuestions);

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 36px;
`;

const QuestionText = styled(H2)`
  text-align: center;
  margin-bottom: 12px;
  color: ${COLORS.primary};
`;

const ActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;