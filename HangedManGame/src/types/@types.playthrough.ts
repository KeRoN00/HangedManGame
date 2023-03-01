

interface Playthrough {
  isRunning: boolean
  fetchProperties: {
    isLoading: boolean
    word: string
    error: string
  }
  score: number
  currentRound: number
  mistakes: number
}
export const initialPlaythroughState: Playthrough =  {
  isRunning: false,
  fetchProperties: {
    isLoading: false,
    word: '',
    error: ''
  },
  score:0,
  currentRound: 0,
  mistakes: 0
}




