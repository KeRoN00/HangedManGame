
interface Settings {
  difficulty: string
  numOfRounds: number
  numOfMistakes: number
}
interface Playthrough {
  isRunning: boolean
  fetchProperties: {
    isLoading: boolean,
    word: string,
    error: string
  }
  score: number
}
export const initialPlaythroughState: Playthrough =  {
  isRunning: false,
  fetchProperties: {
    isLoading: false,
    word: '',
    error: ''
  },
  score:0 

}

export const initialSettingsState: Settings = {
    difficulty: 'easy',
    numOfRounds: 3,
    numOfMistakes: 10,
};

interface keyBoardKeys {
  keys: string[];
}
export const initialKeyBoardKeysState: keyBoardKeys = {
  keys:[]
}

