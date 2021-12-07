import { useRouter } from "next/router";
import { FC } from "react";

interface GameEndContainerProps {}

const GameEndContainer: FC<GameEndContainerProps> = () => {
  const router = useRouter();

  const onReturnToHome = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Game End</h1>
      <button onClick={onReturnToHome}>Return to Home</button>
    </>
  );
};

export default GameEndContainer;
