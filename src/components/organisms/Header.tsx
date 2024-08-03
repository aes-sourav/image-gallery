import React from "react";
import styled from "styled-components";
import { Paragraph } from "../atoms/Paragraph";
import Checkbox from "../atoms/Checkbox";

const MainContainer = styled.main`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ececec;

  .deleteButton {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

interface IProps {
  isCheckbox?: boolean;
  numberOfFile?: number;
  onChange: (action: "removeAll") => void;
  onRemoveImages: () => void;
}
const Header: React.FC<IProps> = ({
  isCheckbox,
  numberOfFile,
  onChange,
  onRemoveImages,
}) => {
  return (
    <MainContainer>
      <FlexContainer>
        {isCheckbox && (
          <Checkbox
            onChange={() => onChange("removeAll")}
            is_checked={"true"}
          />
        )}
        <Paragraph font_size="1.2rem" font_weight="500">
          {!isCheckbox
            ? "Gallery"
            : `${numberOfFile} File${
                numberOfFile && numberOfFile > 1 ? "s" : ""
              } Selected`}
        </Paragraph>
      </FlexContainer>
      {!!numberOfFile && (
        <Paragraph
          cursor="pointer"
          font_size="1.15rem"
          font_weight="500"
          color="red"
          className="deleteButton"
          onClick={() => {
            onRemoveImages();
            onChange("removeAll");
          }}
        >
          Delete File{numberOfFile && numberOfFile > 1 ? "s" : ""}
        </Paragraph>
      )}
    </MainContainer>
  );
};

export default Header;
