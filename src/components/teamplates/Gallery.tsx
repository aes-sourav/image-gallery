import React, { useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import ImageCard from "../organisms/ImageCard";
import PhotoUpload from "../atoms/PhotoUpload";

const images = [
  "/images/image-1.webp",
  "/images/image-2.webp",
  "/images/image-3.webp",
  "/images/image-4.webp",
  "/images/image-5.webp",
  "/images/image-6.webp",
  "/images/image-7.webp",
  "/images/image-8.webp",
  "/images/image-9.webp",
  "/images/image-10.jpeg",
  "/images/image-11.jpeg",
];

const MainContainer = styled.main`
  margin: 1.5rem;
  padding: 0;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  border-radius: 10px;
  min-height: 94.5vh;
`;

const MainCard = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 240px);
  grid-column-gap: 1.75rem;
  grid-row-gap: 1.75rem;

  .img-0 {
    grid-column: 1 / 3;
    grid-row: 1/3;
  }

  @media only screen and (min-width: 1440px) and (max-width: 1600px) {
    grid-template-columns: repeat(6, 200px);
  }
  @media only screen and (min-width: 1280px) and (max-width: 1400px) {
    grid-template-columns: repeat(6, 160px);
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(6, 100px);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Gallery: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [imageSources, setImageSources] = useState(images);

  const onImageSelectChange = (action: {
    img: string;
    whatToDo: "add" | "remove" | "removeAll";
  }) => {
    const { img, whatToDo } = action;
    setSelectedItems((prev) =>
      whatToDo === "add"
        ? [...prev, img]
        : whatToDo === "removeAll"
        ? []
        : [...prev.filter((data) => data !== img)]
    );
  };

  const onRemoveImages = () => {
    setImageSources((prev) =>
      prev.filter((img) => !selectedItems.includes(img))
    );
  };

  const dragItem = React.useRef<string>();
  const dragOverItem = React.useRef<string>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDragEnd = (_e: React.DragEvent<HTMLDivElement>, _index: number) => {
    handleSortImages();
  };

  const handleSortImages = () => {
    if (dragItem?.current === undefined || dragOverItem.current === undefined)
      return;

    const tempImages = [...imageSources];
    const dragItemIndex = tempImages.indexOf(String(dragItem.current));
    const dragOverItemIndex = tempImages.indexOf(String(dragOverItem.current));

    const draggedItemContents = tempImages.splice(dragItemIndex, 1)[0];
    tempImages.splice(dragOverItemIndex, 0, draggedItemContents);
    dragItem.current = undefined;
    dragOverItem.current = undefined;

    setImageSources(tempImages);
  };

  return (
    <MainContainer>
      <Header
        onChange={(action) =>
          onImageSelectChange({ img: "", whatToDo: action })
        }
        onRemoveImages={onRemoveImages}
        isCheckbox={!!selectedItems.length}
        numberOfFile={selectedItems.length}
      />
      <FlexContainer>
        <MainCard>
          {imageSources.map((image, idx) => (
            <ImageCard
              key={image}
              className={`img-${idx}`}
              dragItem={dragItem}
              dragOverItem={dragOverItem}
              draggable={true}
              onDragEnd={onDragEnd}
              onCheckboxChange={onImageSelectChange}
              imgSrc={image}
              is_checked={selectedItems.includes(image) ? "true" : "false"}
            />
          ))}
          <PhotoUpload />
        </MainCard>
      </FlexContainer>
    </MainContainer>
  );
};

export default Gallery;
