import React, { Component } from "react";
import { View, Keyboard, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { ContainerEl, H1, H3, TextEl } from "../../../../style/element";
import { DEBUG_BOX } from "../../../../style/globalStyle";
import styled from "styled-components/native";
import { gbStyle } from "../../../../style/globalStyle";
import { COLORS } from "../../../../constants/Colors";

export class index extends Component {
  state = {
    lodging: false,
  };
  componentWillMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidHide = () => {
    // alert("Keyboard Hidden");
    this.setState({ lodging: true });
  };
  render() {
    return (
      <Container center={this.state.lodging}>
        {!this.state.lodging ? (
          <>
            <Top>
              <H1>Inbound Inspection Process</H1>
              <H3 style={{ marginBottom: 12 }}>
                inspected the label on MS packaging
              </H3>
              <From>
                <TextEl style={{ marginRight: 12, fontSize: 30 }}>
                  Enter Item
                </TextEl>
                <ItemInput
                  autoFocus
                  numberOfLines={1}
                  keyboardType="number-pad"
                  onSubmitEditing={Keyboard.dismiss}
                />
              </From>
            </Top>
          </>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);

const Container = styled(ContainerEl)`
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
`;
const Top = styled.View`
  height: 50%;
  padding: 36px 12px;
  width: 100%;
`;
const From = styled.View`
  flex-direction: row;
  width: 100%;
`;
const ItemInput = styled.TextInput`
  flex-grow: 1;
  background-color: lightgray;
  border-color: gray;
  border-width: 2px;
  border-radius: 3px;
  padding: 0 12px;
  font-size: 30px;
  letter-spacing: 3px;
  color: ${COLORS.secondary};
`;
