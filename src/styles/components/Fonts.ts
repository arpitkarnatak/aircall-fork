import styled, { css } from "styled-components";
interface FontBaseProps {
  color?: string;
  bold?: string; // Make fontWeight optional
}
export const FontBase = styled.div<FontBaseProps>`
  color: ${(props) => props.color || "black"};
  font-feature-settings: "liga" off;
  font-family: "Lato", Inter, sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.bold ? "700" : "400"};
  line-height: normal;
`;

export const fontBaseCss = css`
  font-feature-settings: "liga" off;
  font-family: lato;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Title64 = styled(FontBase)`
  font-weight: 700;
  font-size: 64px;
`;

export const Title36 = styled(FontBase)`
  font-weight: 700;
  font-size: 36px;
`;

export const Title32 = styled(FontBase)`
  font-weight: 700;
  font-size: 32px;
`;

export const Title24 = styled(FontBase)`
  font-size: 24px;
`;

export const Title20 = styled(FontBase)`
  font-size: 20px;
`;

export const BodySM = styled(FontBase)`
  font-size: 16px;
`;

export const BodyXS = styled(FontBase)`
  font-size: 12px;
`;
