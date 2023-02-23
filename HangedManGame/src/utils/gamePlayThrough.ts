
export const ResetKeyboard = (s: string) => {
        const buttons = document.getElementsByClassName(s)
        const buttonsArr = Array.from(buttons);
        buttonsArr.forEach(button => (button as HTMLButtonElement).removeAttribute('disabled'))
}
export const disableKey = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (e.target as HTMLButtonElement).toggleAttribute('disabled');
  }


// start only when isRunning = true
// get Settings, number of rounds,
// start round
    // show hidden word
    // user types letters
    //upon click change button to disabled
    // if they match with overall word 
        // change letters in hidden word to visible
    //if not
        // numOfMistakes based on difficulty ++
        // get next hangedman piece on the screen
    // upon finished word or numOfMistakes = max, get to next round
// game ends when all rounds have been played 
//if finished show the score 

// get random word 