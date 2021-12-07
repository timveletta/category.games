import { FC } from "react";

interface CategoryContainerProps {
  onNext(): void;
  category: string;
}

const CategoryContainer: FC<CategoryContainerProps> = ({
  category,
  onNext,
}) => {
  return (
    <>
      <h2>The Category is</h2>
      <h1>{category}</h1>
      <h2>
        Starting with [[[the team behind]]], each player should bid how many
        items they can name in this category.
      </h2>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default CategoryContainer;
