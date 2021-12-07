import { FC } from "react";

interface TeamNameContainerProps {
  isFirst?: boolean;
  onNext(): void;
}

const TeamNameContainer: FC<TeamNameContainerProps> = ({ onNext, isFirst }) => {
  return (
    <>
      <h1>What is the {isFirst ? "first" : "second"} team named?</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default TeamNameContainer;
