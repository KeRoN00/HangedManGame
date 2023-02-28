
interface Settings {
  difficulty: string;
  numOfRounds: number;
}
interface Playthrough {
  isRunning: boolean
  fetchProperties: {
    isLoading: boolean,
    word: string,
    error: string
  }
}
export const initialPlaythroughState: Playthrough =  {
  isRunning: false,
  fetchProperties: {
    isLoading: false,
    word: '',
    error: ''
  }

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
