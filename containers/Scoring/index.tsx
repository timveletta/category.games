import { FC } from "react";

interface ScoringContainerProps {
  onNext(): void;
}

const ScoringContainer: FC<ScoringContainerProps> = ({ onNext }) => {
  return (
    <>
      <h1>Team A Points</h1>
      <h1>Team B Points</h1>
      <h2>Get ready for the next topic!</h2>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default ScoringContainer;
