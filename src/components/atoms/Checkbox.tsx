import styled from "styled-components";

const StyledCheckBox = styled.input<{ height?: string; width?: string }>`
  height: ${({ height }) => height || "21px"};
  width: ${({ width }) => width || "21px"};
  cursor: pointer;
`;

interface IProps {
  onChange: (action: "add" | "remove") => void;
  is_checked?: "true" | "false";
  height?: string;
  width?: string;
}
const Checkbox = ({ is_checked, onChange, height, width }: IProps) => {
  return (
    <StyledCheckBox
      type="checkbox"
      height={height}
      width={width}
      checked={is_checked === "true" ? true : false}
      onChange={(e) => onChange(e.target.checked ? "add" : "remove")}
    />
  );
};

export default Checkbox;
