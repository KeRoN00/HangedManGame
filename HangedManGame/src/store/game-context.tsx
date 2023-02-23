import React, { useState } from "react";
import {GameType, Round, Settings} from '../@types.game'




export const GameContext = React.createContext<GameType | null>(null);

export const GameContextProvider: React.FC<{children: React.ReactNode}> = (
  props
) => {
const [numOfRounds, setNumOfRounds] = useState<number>(3);
const [settings, setSettings] = useState<Settings>({difficulty: 'easy', numOfRounds: numOfRounds});
const [isRunning, setIsRunning] = useState<boolean>(false);
const [round, setRound] = useState<Round>({word: ''});

const toggleGameRunningHandler = (isRunning: boolean) => {
  setIsRunning(isRunning);
  return isRunning;
};
const changeDifficultyHandler = (newDifficulty: string) => {
  setSettings({difficulty: newDifficulty, numOfRounds}
  );
  return settings;
};
const changeRoundsHandler = (num: number) => {
  if(num<3) return;
  setNumOfRounds(num);
  return numOfRounds;
};
const toggleNextRound = (newWord: string) => {
 setRound({word: newWord});
 return round;
};

  const ContextValue = {
    round: round,
    toggleGameRunning: toggleGameRunningHandler,
    changeDifficulty: changeDifficultyHandler,
    changeNumOfRounds: changeRoundsHandler,
    isRunning: isRunning,
    nextRound: toggleNextRound
  }

  return (
    <GameContext.Provider value={ContextValue}>{props.children}</GameContext.Provider>
  );
};

export default GameContextProvider;
