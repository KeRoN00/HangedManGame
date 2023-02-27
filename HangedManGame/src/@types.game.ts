
interface Settings {
  difficulty: string;
  numOfRounds: number;
}
interface Playthrough {
  isRunning: boolean
  word: string;
}
export const initialPlaythroughState: Playthrough =  {
  isRunning: false,
  word: '',

}

export const initialSettingsState: Settings = {
    difficulty: 'easy',
    numOfRounds: 3
};

interface keyBoardKeys {
  keys: string[];
}
export const initialKeyBoardKeysState: keyBoardKeys = {
  keys:[]
}


export type FetchResponse = {
  data: string, 
  error: any,
  fetchData: (difficulty: string) => void,
}
