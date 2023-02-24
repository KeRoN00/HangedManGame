import React, { useState } from "react";
import { GameType, initialGameSettings, Round, Settings } from "../@types.game";

export const GameContext = React.createContext<GameType>(initialGameSettings);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [numOfRounds, setNumOfRounds] = useState<number>(initialGameSettings.settings.numOfRounds);
  const [settings, setSettings] = useState<Settings>(initialGameSettings.settings);
  const [isRunning, setIsRunning] = useState<boolean>(initialGameSettings.isRunning);
  const [round, setRound] = useState<Round>(initialGameSettings.round);

  const toggleGameRunningHandler = (isRunning: boolean) => {
    setIsRunning(isRunning);
    return isRunning;
  };
  const changeDifficultyHandler = (newDifficulty: string) => {
    setSettings({ difficulty: newDifficulty, numOfRounds });
    return settings;
  };
  const changeRoundsHandler = (num: number) => {
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
    nextRound: toggleNextRound,
    settings: settings,
  };

  return (
    <GameContext.Provider value={ContextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
