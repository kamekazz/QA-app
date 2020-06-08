import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { COLORS } from "../../../../constants/Colors";
import { H1, H3, H2, InputEL } from "../../../../style/element";
import {
  getAlias,
  getImageSalsify,
  getWeightAndCubic,
  getMS_Quantity,
  getMS_P65OnMs_Code,
} from "../../../../Utils/helperFunctions";
import { WINDOW_WIDTH } from "../../../../style/globalStyle";

class MSBoxQuestions extends Component {
  state = {
    renderAliasQuestions: true,
    aliasAnswer: false,
    /////////////////////
    renderGraphicQuestions: false,
    graphicAnswer: false,
    //////////////////////////////////
    renderDescriptionQuestions: false,
    descriptionAnswer: false,
    //////////////////////////
    renderWeightCubicQuestions: false,
    weightCubicAnswer: false,
    renderTextInputWeightCubic: false,
    cubic: 0,
    weight: 0,
    ////////////////////////
    renderQuantityOnLabelQuestions: false,
    quantityAnswer: false,
    quantity: 0,
    renderTextInputQuantity: false,
    ////////////////////////
    renderP65OnMs_Questions: false,
    p65OnMs_Answer: false,
    ////////////////////////
    renderP65OnMs_Code_Questions: false,
    p65OnMs_Code_Answer: false,
    ///////////////////////////////
    renderCubicScanMs: false,
    cubicScanMs_Answer: false,
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
  ////////////////////////////////////////
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
  /////////////////////////////////////////
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
  //////////////////////////////////////////
  handleWeightCubicAnswer = (_value) => {
    if (_value) {
      this.setState({
        renderWeightCubicQuestions: false,
        quantityAnswer: true,
        renderQuantityOnLabelQuestions: true,
      });
    } else {
      this.setState({
        renderTextInputWeightCubic: true,
        weightCubicAnswer: false,
      });
    }
  };

  handleNewWeightCubicValue = () => {
    if (this.state.cubic && this.state.weight) {
      this.setState({
        renderWeightCubicQuestions: false,
        renderQuantityOnLabelQuestions: true,
      });
    } else {
      alert("need to fill all text input");
    }
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
        <ActionContainer>
          <H2 style={{ textAlign: "center", marginBottom: 12 }}>
            (Cubic:{resultCubic})
          </H2>
          <H2 style={{ textAlign: "center", marginBottom: 12 }}>
            (Weight:{resultWeight})
          </H2>
        </ActionContainer>
        {!this.state.renderTextInputWeightCubic ? (
          <ActionContainer>
            <Button
              title="no"
              color={COLORS.error}
              onPress={() => this.handleWeightCubicAnswer(false)}
            />
            <Button
              title="yes"
              color={COLORS.secondary}
              onPress={() => this.handleWeightCubicAnswer(true)}
            />
          </ActionContainer>
        ) : (
          <>
            <ActionContainer style={{ marginBottom: 12 }}>
              <InputEL
                autoFocus
                numberOfLines={1}
                keyboardType="number-pad"
                style={{ width: 125 }}
                onChangeText={(_text) => this.setState({ cubic: _text })}
              />
              <InputEL
                numberOfLines={1}
                keyboardType="number-pad"
                style={{ width: 125 }}
                onChangeText={(_text) => this.setState({ weight: _text })}
              />
            </ActionContainer>
            <Button
              title="Summit"
              onPress={() => this.handleNewWeightCubicValue()}
            />
          </>
        )}
      </View>
    );
  };
  //////////////////////////////////////////
  handleQuantityOnLabelAnswer = (_value) => {
    if (_value) {
      this.setState({
        renderQuantityOnLabelQuestions: false,
        quantityAnswer: true,
        renderP65OnMs_Questions: true,
      });
    } else {
      this.setState({
        renderTextInputQuantity: true,
        weightCubicAnswer: false,
      });
    }
  };

  handleNewQuantityValue = () => {
    if (this.state.quantity) {
      this.setState({
        renderQuantityOnLabelQuestions: false,
        renderP65OnMs_Questions: true,
      });
    } else {
      alert(`need to fill all text input`);
    }
  };

  renderQuantityOnLabelQuestions = () => {
    const quantity = getMS_Quantity(this.props.itemData);
    return (
      <View style={{ paddingHorizontal: 3 }}>
        <QuestionText>Is the quantity correct on the label?</QuestionText>
        <ActionContainer>
          <H2 style={{ textAlign: "center", marginBottom: 12 }}>
            (Unt:{quantity})
          </H2>
        </ActionContainer>
        {!this.state.renderTextInputQuantity ? (
          <ActionContainer>
            <Button
              title="no"
              color={COLORS.error}
              onPress={() => this.handleQuantityOnLabelAnswer(false)}
            />
            <Button
              title="yes"
              color={COLORS.secondary}
              onPress={() => this.handleQuantityOnLabelAnswer(true)}
            />
          </ActionContainer>
        ) : (
          <>
            <ActionContainer style={{ marginBottom: 12 }}>
              <InputEL
                autoFocus
                numberOfLines={1}
                keyboardType="number-pad"
                style={{ width: 125 }}
                onChangeText={(_text) => this.setState({ quantity: _text })}
              />
            </ActionContainer>
            <Button
              title="Summit"
              onPress={() => this.handleNewQuantityValue()}
            />
          </>
        )}
      </View>
    );
  };
  //////////////////////////////////////////////
  handleP65OnMs_Answer = (_value) => {
    if (_value) {
      this.setState({
        renderP65OnMs_Questions: false,
        p65OnMs_Answer: true,
        renderP65OnMs_Code_Questions: true,
      });
    } else {
      this.setState({
        renderP65OnMs_Questions: false,
        p65OnMs_Answer: false,
        renderP65OnMs_Code_Questions: true,
      });
    }
  };

  renderP65OnMs_Questions = () => {
    return (
      <>
        <QuestionText>Is the prop 65 label on the MS packaging</QuestionText>
        <ActionContainer>
          <Button
            title="no"
            color={COLORS.error}
            onPress={() => this.handleP65OnMs_Answer(false)}
          />
          <Button
            title="yes"
            color={COLORS.secondary}
            onPress={() => this.handleP65OnMs_Answer(true)}
          />
        </ActionContainer>
      </>
    );
  };
  ////////////////////////////////////////////////////////////
  handleP65OnMs_Code_Answer = (_value) => {
    if (_value) {
      this.setState({
        renderP65OnMs_Code_Questions: false,
        p65OnMs_Code_Answer: true,
      });
      alert("next question");
    } else {
      this.setState({
        renderP65OnMs_Code_Questions: false,
        p65OnMs_Code_Answer: false,
      });
      alert("next question");
    }
  };

  renderP65OnMs_Code_Questions = () => {
    const { material, description } = getMS_P65OnMs_Code(this.props.itemData);
    return (
      <>
        <QuestionText>Is the prop 65 label description correct?</QuestionText>

        <H2 style={{ textAlign: "center", marginBottom: 12 }}>
          (material:<H2 style={{ color: COLORS.error }}>{material}</H2>)
        </H2>
        <H2 style={{ textAlign: "center", marginBottom: 12 }}>
          (description:{description})
        </H2>

        <ActionContainer>
          <Button
            title="no"
            color={COLORS.error}
            onPress={() => this.handleP65OnMs_Code_Answer(false)}
          />
          <Button
            title="yes"
            color={COLORS.secondary}
            onPress={() => this.handleP65OnMs_Code_Answer(true)}
          />
        </ActionContainer>
      </>
    );
  };
  ////////////////////////////////////////////////////////////
  handleP65OnMs_Code_Answer = (_value) => {
    if (_value) {
      this.setState({
        renderP65OnMs_Code_Questions: false,
        p65OnMs_Code_Answer: true,
      });
      alert("next question");
    } else {
      this.setState({
        renderP65OnMs_Code_Questions: false,
        p65OnMs_Code_Answer: false,
      });
      alert("next question");
    }
  };

  renderCubicScanMs = () => {
    return (
      <>
        <QuestionText>Cubic scan this Ms pack</QuestionText>

        <ActionContainer>
          <Button
            title="null"
            color={COLORS.error}
            onPress={() => this.handleP65OnMs_Code_Answer(false)}
          />
          <Button
            title="Done"
            color={COLORS.secondary}
            onPress={() => this.handleP65OnMs_Code_Answer(true)}
          />
        </ActionContainer>
      </>
    );
  };
  ////////////////////////////////////////////////////////////
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
        {this.state.renderQuantityOnLabelQuestions &&
          this.renderQuantityOnLabelQuestions()}
        {this.state.renderP65OnMs_Questions && this.renderP65OnMs_Questions()}
        {this.state.renderP65OnMs_Code_Questions &&
          this.renderP65OnMs_Code_Questions()}
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
