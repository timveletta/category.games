import { FC } from "react";

interface TimerContainerProps {
  onNext(): void;
  category: string;
}

const TimerContainer: FC<TimerContainerProps> = ({ onNext, category }) => {
  return (
    <>
      <h2>The Category is</h2>
      <h1>{category}</h1>
      <h1>
        30<sub>secs</sub>
      </h1>
      <button>Start the Timer</button>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default TimerContainer;
