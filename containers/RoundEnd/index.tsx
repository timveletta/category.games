import { FC } from "react";

interface RoundEndContainerProps {
  onNext(): void;
}

const RoundEndContainer: FC<RoundEndContainerProps> = ({ onNext }) => {
  return (
    <>
      <h1>Round End</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default RoundEndContainer;
