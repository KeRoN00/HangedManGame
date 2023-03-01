import styles from '../components/styles.module.css'

export const ResetKeyboard = () => {
        const buttons = document.getElementsByClassName(styles.keyboardKey.toString())
        const buttonsArr = Array.from(buttons);
        buttonsArr.forEach(button => (button as HTMLButtonElement).removeAttribute('disabled'))
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