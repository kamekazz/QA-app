import styled from "styled-components/native";
import { COLORS } from "../constants/Colors";

export const TextEl = styled.Text`
  font-size: 18px;
  color: ${COLORS.text};
`;

export const H1 = styled(TextEl)`
  font-size: 32px;
  color: ${COLORS.text};
  font-weight: 900;
`;

export const H2 = styled(TextEl)`
  font-size: 24px;
  color: ${COLORS.text};
`;

export const H3 = styled(TextEl)`
  font-size: 18.72px;
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
