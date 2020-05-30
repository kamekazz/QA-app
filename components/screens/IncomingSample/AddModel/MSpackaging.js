import React, { Component } from "react";

import { connect } from "react-redux";
import { ContainerEl, TextEl } from "../../../../style/element";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { COLORS } from "../../../../constants/Colors";
import { View, StyleSheet, Animated, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const data = {
  questions: [
    "Ir money was no issue , what career would you choose?",
    "If you  be on any sitcom as a reoccurring character , what sitcom would ti be?",
    "Would you rather go 200 years into the future or the past for day",
    "what was the best thing before sliced bread?",
    "what was the best thing before sliced bread?",
    "If you rather go 200 years into the future or the past for a day",
    "What's your favorite fast food restaurant",
    "If you could warted an article to be featured on The New York Times,Times What would the subject be about?",
  ],
};

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      animation: new Animated.Value(0),
      progress: new Animated.Value(0),
    };
  }

  handleAnswer = () => {
    Animated.parallel([
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 400,
      }),
      Animated.timing(this.state.progress, {
        toValue: this.state.index + 1,
        duration: 400,
      }),
    ]).start(() => {
      this.setState({ index: this.state.index + 1 }, () => {
        this.state.animation.setValue(0);
      });
    });
  };

  render() {
    const { index } = this.state;
    const question = data.questions[index];
    let nextQuestion;

    if (index + 1 < data.questions.length) {
      nextQuestion = data.questions[index + 1];
    }

    const mainQuestionInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -WIDTH],
    });

    const nextQuestionInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [WIDTH, 0],
    });

    const progressInterpolate = this.state.progress.interpolate({
      inputRange: [0, data.questions.length],
      outputRange: ["0%", "100%"],
    });

    const progressStyle = {
      width: progressInterpolate,
    };

    const mainStyle = {
      transform: [
        {
          translateX: mainQuestionInterpolate,
        },
      ],
    };

    const nextStyle = {
      transform: [
        {
          translateX: nextQuestionInterpolate,
        },
      ],
    };

    return (
      <Container>
        <View style={[StyleSheet.absoluteFill, style.overlay]}>
          <AnimatedTextEl style={mainStyle}>{question}</AnimatedTextEl>
          <AnimatedTextEl style={nextStyle}>{nextQuestion}</AnimatedTextEl>
        </View>
        <ProgressBarContainer>
          <AnimatedProgressBar style={progressStyle} />
        </ProgressBarContainer>
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

const QuestionText = styled(TextEl)`
  background-color: transparent;
  position: absolute;
  font-size: 30px;
  text-align: center;
`;

const ProgressBarContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`;
const ProgressBarEl = styled.View`
  height: 100%;
  background-color: red;
`;

const AnimatedProgressBar = Animated.createAnimatedComponent(ProgressBarEl);
const AnimatedTextEl = Animated.createAnimatedComponent(QuestionText);

const style = StyleSheet.create({
  overlay: {
    alignItems: "center",
    justifyContent: "center",
  },
});
