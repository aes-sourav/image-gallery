import styled from "styled-components";
import Checkbox from "../atoms/Checkbox";

const Image = styled.img`
  width: 100%;
`;

const CardWrapper = styled.div<{ is_checked?: "true" | "false" }>`
  position: relative;
  display: flex;
  cursor: move;

  .imgWrapper {
    opacity: ${({ is_checked }) => (is_checked === "true" ? "0.5" : "1")};
  }
  background-color: ${({ is_checked }) =>
    is_checked === "true" ? "#c3c3c7" : undefined};
  border-radius: ${({ is_checked }) =>
    is_checked === "true" ? "5px" : undefined};

  &:hover {
    .imgWrapper {
      opacity: 0.5;
    }
    border-radius: 5px;
    background-color: #c3c3c7;
    .checkbox {
      display: flex;
    }
    transition: 0.5s ease;
  }
  transition: all 0.2s ease;
`;

const CheckboxWrapper = styled.div<{ is_visible?: "true" | "false" }>`
  position: absolute;
  padding: 1.5rem;
  display: ${({ is_visible }) => (is_visible === "true" ? "flex" : "none")};
`;

const CardContainer = styled.div`
  border: 2px solid #e2dfdf;
  border-radius: 0.5rem;
  width: 100%;
`;

interface IProps {
  imgSrc: string;
  is_checked?: "true" | "false";
  className: string;
  draggable?: boolean;
  dragItem: React.MutableRefObject<string | undefined>;
  dragOverItem: React.MutableRefObject<string | undefined>;
  onDragEnd: (e, img) => void;
  onCheckboxChange: (action: {
    img: string;
    whatToDo: "add" | "remove";
  }) => void;
}
const ImageCard: React.FC<IProps> = ({
  imgSrc,
  onCheckboxChange,
  dragItem,
  dragOverItem,
  onDragEnd,
  is_checked,
  className,
  draggable,
}) => {
  return (
    <CardWrapper
      is_checked={is_checked}
      className={className}
      draggable={draggable}
      onDragStart={() => (dragItem.current = imgSrc)}
      onDragEnter={() => (dragOverItem.current = imgSrc)}
      onDragEnd={(e) => onDragEnd(e, imgSrc)}
      onDragOver={(e) => e.preventDefault()}
    >
      <CardContainer draggable className="imgWrapper">
        <Image src={imgSrc} />
      </CardContainer>
      <CheckboxWrapper is_visible={is_checked} className="checkbox">
        <Checkbox
          is_checked={is_checked}
          onChange={(action) =>
            onCheckboxChange({ img: imgSrc, whatToDo: action })
          }
        />
      </CheckboxWrapper>
    </CardWrapper>
  );
};

export default ImageCard;
