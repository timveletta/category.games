import { FC } from "react";

interface RoundStartContainerProps {
  onNext(): void;
  roundNumber: number;
  isLast?: boolean;
}

const RoundStartContainer: FC<RoundStartContainerProps> = ({
  roundNumber,
  isLast,
  onNext,
}) => {
  return (
    <>
      <h1>Round {roundNumber} Start</h1>
      {isLast && (
        <h3>
          Round {roundNumber} is a team round. [[INCLUDE MORE INSTRUCTIONS]]
        </h3>
      )}
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default RoundStartContainer;
