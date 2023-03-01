interface Settings {
    difficulty: string
    numOfRounds: number
    numOfMistakes: number
  }

export const initialSettingsState: Settings = {
    difficulty: 'easy',
    numOfRounds: 3,
    numOfMistakes: 10,
};