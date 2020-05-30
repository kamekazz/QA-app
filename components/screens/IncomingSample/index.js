import React, { Component } from "react";
import { Button, Icon, Fab } from "native-base";
import { connect } from "react-redux";
import { ContainerEl, TextEl } from "../../../style/element";

import { COLORS } from "../../../constants/Colors";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          onPress={() => this.props.navigation.navigate("AddModel(1)")}
        >
          <Icon name="add" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
        </Fab>
      </ContainerEl>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
