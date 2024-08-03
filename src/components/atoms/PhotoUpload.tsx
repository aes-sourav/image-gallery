import React from "react";
import styled from "styled-components";
import GallerySVG from "../../assets/GallerySVG";

const StyledInput = styled.label`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 2px dotted #c3c3c7;
  border-radius: 5px;
  cursor: pointer;

  height: 240px;
  width: 240px;

  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    height: 200px;
    width: 200px;
  }
  @media only screen and (min-width: 1280px) and (max-width: 1400px) {
    height: 160px;
    width: 160px;
  }
  @media only screen and (max-width: 1200px) {
    height: 100px;
    width: 100px;
  }
`;

const PhotoUpload: React.FC = () => {
  return (
    <>
      <StyledInput htmlFor="upload-photo">
        <GallerySVG />
        <h3 style={{ fontWeight: "400" }}>Add Images</h3>
      </StyledInput>
      <input
        style={{ display: "none" }}
        type="file"
        name="photo"
        id="upload-photo"
      />
    </>
  );
};

export default PhotoUpload;
