import type { NextPage } from "next";
import { useState } from "react";
import topics from "../../models/topics.json";
import CategoryContainer from "../../containers/Category";
import NumberOfPlayersContainer from "../../containers/NumberOfPlayers";
import RoundEndContainer from "../../containers/RoundEnd";
import GameEndContainer from "../../containers/GameEnd";
import ScoringContainer from "../../containers/Scoring";
import TeamNameContainer from "../../containers/TeamName";
import TimerContainer from "../../containers/Timer";
import TopicContainer from "../../containers/Topic";
import RoundStartContainer from "../../containers/RoundStart";
import getRandomNumber from "../../utils/getRandomNumber";

enum PlayState {
  NUMBER_OF_PLAYERS,
  TEAM_A_NAME,
  TEAM_B_NAME,
  ROUND_START,
  TOPIC,
  CATEGORY,
  TIMER,
  SCORING,
  ROUND_END,
  GAME_END,
}

type TopicCategory = {
  topic: string;
  category: string;
};

const NUMBER_OF_ROUNDS = 3;

const Play: NextPage = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(6);
  const [gameState, setGameState] = useState(PlayState.NUMBER_OF_PLAYERS);
  const [roundNumber, setRoundNumber] = useState(1);
  const [categoryNumber, setCategoryNumber] = useState(1);
  const [topicCategory, setTopicCategory] = useState<TopicCategory>({
    topic: "",
    category: "",
  });

  const getTopicCategory = (): TopicCategory => {
    const selectedTopic = topics[getRandomNumber(topics.length)];
    return {
      topic: selectedTopic.topic,
      category:
        selectedTopic.categories[
          getRandomNumber(selectedTopic.categories.length)
        ],
    };
  };

  const onNext = () => {
    switch (gameState) {
      case PlayState.NUMBER_OF_PLAYERS:
        setGameState(PlayState.TEAM_A_NAME);
        break;
      case PlayState.TEAM_A_NAME:
        setGameState(PlayState.TEAM_B_NAME);
        break;
      case PlayState.TEAM_B_NAME:
        setGameState(PlayState.ROUND_START);
        break;
      case PlayState.ROUND_START:
        setGameState(PlayState.TOPIC);
        setTopicCategory(getTopicCategory());
        break;
      case PlayState.TOPIC:
        setGameState(PlayState.CATEGORY);
        break;
      case PlayState.CATEGORY:
        setGameState(PlayState.TIMER);
        break;
      case PlayState.TIMER:
        if (roundNumber === NUMBER_OF_ROUNDS) {
          setGameState(PlayState.GAME_END);
        } else if (categoryNumber < numberOfPlayers / 2) {
          setGameState(PlayState.SCORING);
        } else {
          setGameState(PlayState.ROUND_END);
        }
        break;
      case PlayState.SCORING:
        setGameState(PlayState.TOPIC);
        setTopicCategory(getTopicCategory());
        setCategoryNumber((prev) => prev + 1);
        break;
      case PlayState.ROUND_END:
        setGameState(PlayState.ROUND_START);
        setRoundNumber((prev) => prev + 1);
        setCategoryNumber(1);
        break;
    }
  };

  return (
    <>
      {(() => {
        switch (gameState) {
          case PlayState.NUMBER_OF_PLAYERS:
            return <NumberOfPlayersContainer onNext={onNext} />;
          case PlayState.TEAM_A_NAME:
            return <TeamNameContainer isFirst onNext={onNext} />;
          case PlayState.TEAM_B_NAME:
            return <TeamNameContainer onNext={onNext} />;
          case PlayState.ROUND_START:
            return (
              <RoundStartContainer
                isLast={NUMBER_OF_ROUNDS === roundNumber}
                roundNumber={roundNumber}
                onNext={onNext}
              />
            );
          case PlayState.TOPIC:
            return (
              <TopicContainer topic={topicCategory.topic} onNext={onNext} />
            );
          case PlayState.CATEGORY:
            return (
              <CategoryContainer
                category={topicCategory.category}
                onNext={onNext}
              />
            );
          case PlayState.TIMER:
            return (
              <TimerContainer
                category={topicCategory.category}
                onNext={onNext}
              />
            );
          case PlayState.SCORING:
            return <ScoringContainer onNext={onNext} />;
          case PlayState.ROUND_END:
            return <RoundEndContainer onNext={onNext} />;
          case PlayState.GAME_END:
            return <GameEndContainer />;
        }
      })()}
    </>
  );
};

export default Play;
