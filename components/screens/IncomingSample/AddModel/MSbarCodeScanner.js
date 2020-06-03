import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { TextEl, H1 } from "../../../../style/element";
import { COLORS } from "../../../../constants/Colors";
import { DEBUG_BOX } from "../../../../style/globalStyle";
import { getMSBarcodeCode } from "../../../../Utils/helperFunctions";

function MSbarCodeScanner({ itemData, navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [goodMach, setGoodMach] = useState(false);
  const [barcodeNumber, setBarcodeNumber] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    setBarcodeNumber(getMSBarcodeCode(itemData));
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (barcodeNumber == data) {
      handleAction("good");
    } else {
      handleAction("bad");
    }
  };

  const handleAction = (_value) => {
    if (_value == "good") {
      setGoodMach(true);
      setScanned(false);
    } else {
      setGoodMach(false);
      setScanned(true);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <TopView>
        <TextAction>Scan MS Package</TextAction>
      </TopView>
      {scanned && (
        <Button
          title={"Tap to Scan Again"}
          onPress={() => setScanned(false)}
          color={COLORS.primary}
        />
      )}
      {goodMach && (
        <Button
          title="Next Step"
          onPress={() => navigation.navigate("AddModel(2)")}
          color={COLORS.secondary}
        />
      )}
    </View>
  );
}

const mapStateToProps = (state) => ({
  itemData: state.incoming.item,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MSbarCodeScanner);

const TextAction = styled(H1)`
  color: ${COLORS.primary};
`;

const TopView = styled.View`
  position: absolute;
  top: 36px;
  left: 0;

  align-items: center;
  width: 100%;
`;
