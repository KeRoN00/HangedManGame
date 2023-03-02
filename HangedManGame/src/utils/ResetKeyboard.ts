import styles from '../components/styles.module.css'

export const ResetKeyboard = () => {
        const buttons = document.getElementsByClassName(styles.keyboardKey.toString())
        const buttonsArr = Array.from(buttons);
        buttonsArr.forEach(button => (button as HTMLButtonElement).removeAttribute('disabled'))
}
