import { FC } from "react";

interface TopicContainerProps {
  onNext(): void;
  topic: string;
}

const TopicContainer: FC<TopicContainerProps> = ({ onNext, topic }) => {
  return (
    <>
      <h2>The Topic is</h2>
      <h1>{topic}</h1>
      <h3>
        Choose someone from your team who might know the most about this topic.
      </h3>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default TopicContainer;
