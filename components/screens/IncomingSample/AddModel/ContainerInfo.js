import React, { Component } from "react";

import { connect } from "react-redux";

import styled from "styled-components/native";
import { COLORS } from "../../../../constants/Colors";
import { View, StyleSheet, Animated, Dimensions, Button } from "react-native";
import { TextEl, ContainerEl, InputEL } from "../../../../style/element";
import { DEBUG_BOX } from "../../../../style/globalStyle";
import {
  acAddIncomingItemPo,
  acAddIncomingItemContainer,
} from "../../../../store/actions";

const WIDTH = Dimensions.get("window").width;
const data = {
  questions: ["PO number?", "Container?"],
};

class ContainerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      animation: new Animated.Value(0),
      progress: new Animated.Value(0),
      answers: "",
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
        this.saveData(this.state.index);
      });
    });
  };

  saveData = (_index) => {
    if (_index == 1) {
      this.props.acAddIncomingItemPo(this.state.answers);
      this.setState({ answers: "" });
    }

    if (_index == 2) {
      this.props.acAddIncomingItemContainer(this.state.answers);
      this.setState({ answers: "" }, () => {
        // this.props.navigation.push("MSbarCodeScanner");
      });
    }
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
        <Top>
          <View style={{ marginBottom: 45 }} />
          <View style={[StyleSheet.absoluteFill, style.overlay]}>
            <AnimatedTextEl style={mainStyle}>{question}</AnimatedTextEl>
            <AnimatedTextEl style={nextStyle}>{nextQuestion}</AnimatedTextEl>
          </View>
          <InputEL
            style={{ marginBottom: 12 }}
            autoFocus
            numberOfLines={1}
            value={this.state.answers}
            onChangeText={(_text) => this.setState({ answers: _text })}
          />
          <Button
            title="submit"
            onPress={() => this.handleAnswer()}
            color={COLORS.secondary}
          />
        </Top>
        <ProgressBarContainer>
          <AnimatedProgressBar style={progressStyle} />
        </ProgressBarContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { acAddIncomingItemPo, acAddIncomingItemContainer };

export default connect(mapStateToProps, mapDispatchToProps)(ContainerInfo);

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin-top: 36px;
`;

const Top = styled.View`
  height: 50%;
  padding: 0 12px;
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
  background-color: ${COLORS.primary};
`;

const AnimatedProgressBar = Animated.createAnimatedComponent(ProgressBarEl);
const AnimatedTextEl = Animated.createAnimatedComponent(QuestionText);

const style = StyleSheet.create({
  overlay: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 36,
  },
});
