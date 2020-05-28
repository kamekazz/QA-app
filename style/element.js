import styled from "styled-components/native";
import { COLORS } from "../constants/Colors";

export const TextEl = styled.Text`
  font-size: 18px;
  color: ${COLORS.text};
`;
////////////////////////////////////
export const GridEl = styled.View``;

export const ContainerEl = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.bg};
  justify-content: center;
  align-items: center;
`;
