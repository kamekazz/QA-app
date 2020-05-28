import React, { Component } from "react";
import { Modal } from "react-native";
import { Container, Header, Button, Icon, Fab } from "native-base";
import { connect } from "react-redux";
import { ContainerEl, TextEl } from "../../../style/element";
import AddModel from "./AddModel";
import { COLORS } from "../../../constants/Colors";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  modelOption = (_value) => {
    this.setState({ modalVisible: _value });
  };

  render() {
    return (
      <ContainerEl>
        <TextEl> incoming Sample </TextEl>

        <Fab
          active={false}
          direction="up"
          containerStyle={{}}
          style={{
            backgroundColor: COLORS.secondary,
            scaleX: 1.2,
            scaleY: 1.2,
          }}
          position="bottomRight"
          onPress={() => this.modelOption(true)}
        >
          <Icon name="add" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
        </Fab>

        <Modal
          animationType="slide"
          //   transparent={true}
          visible={this.state.modalVisible}
          //   onRequestClose={() => {
          //     alert("Modal has been closed.");
          //   }}
        >
          <AddModel modelOption={this.modelOption} />
        </Modal>
      </ContainerEl>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
