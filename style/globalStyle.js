import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";
import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const gbStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  // BOX_SHADOW: { elevation: 10 },
});

export const BOX_SHADOW = css`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const ULTRA_CENTER = css`
  justify-content: center;
  align-items: center;
`;
