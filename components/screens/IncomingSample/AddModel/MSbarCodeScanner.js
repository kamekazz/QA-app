import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";

class MSbarCodeScanner extends Component {
  render() {
    return (
      <View>
        <Text> camera </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MSbarCodeScanner);
