import styled from "styled-components";

export const Paragraph = styled.p<{
  font_size: string;
  font_weight?: string;
  color?: string;
  cursor?: string;
}>`
  font-size: ${({ font_size }) => font_size};
  font-weight: ${({ font_weight }) => font_weight || 400};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
`;
