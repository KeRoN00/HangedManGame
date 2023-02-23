
export type Settings = {
  difficulty: string;
  numOfRounds: number;
}

export interface Round {
  word: string;
}



export type GameType = {
  isRunning: boolean;
  round: Round;
  toggleGameRunning: (isRunning: boolean) => void;
  changeDifficulty?: (settings: string) => void;
  changeNumOfRounds?: (settings: number) => void;
  nextRound: (newWord: string) => void;
  settings: Settings
};


export type FetchResponse = {
  data: any, 
  error: any,
  status: string ,
  fetchData: () => void,
}
