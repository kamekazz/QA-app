import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { TextEl, ContainerEl } from "../../../style/element";
import { View, Button } from "react-native";
import { COLORS } from "../../../constants/Colors";

const index = ({ navigation }) => {
  return (
    <ContainerEl>
      <TextEl>Home</TextEl>
      <Button
        title="go to incoming sample"
        color={COLORS.secondary}
        onPress={() => navigation.navigate("IncomingScreen")}
      />
    </ContainerEl>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(index);
