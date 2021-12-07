import { FC } from "react";

interface NumberOfPlayersContainerProps {
  onNext(): void;
}

const NumberOfPlayersContainer: FC<NumberOfPlayersContainerProps> = ({
  onNext,
}) => {
  return (
    <>
      <h1>How many people are playing?</h1>
      {/* TODO if an odd number is input, show a message saying one person will have to go twice in each of the rounds */}
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default NumberOfPlayersContainer;
