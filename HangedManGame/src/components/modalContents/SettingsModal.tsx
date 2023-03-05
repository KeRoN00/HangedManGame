import React, { useEffect } from 'react'
import { CgClose } from 'react-icons/cg'
import { BsQuestion } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { changeContent, closeModal } from '../../store/slices/modal-slice'
import styles from '../styles.module.css'
import { setDifficulty, setNumberOfRounds } from '../../store/slices/settings-slice'
const SettingsModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const {difficulty, numOfRounds, numOfMistakes} = useAppSelector((state)=> state.settings)
  
  useEffect(() => {
    console.log(difficulty);
    console.log(numOfRounds);
    console.log(numOfMistakes);
  }, [difficulty, numOfRounds]);
  
  const changeNumberOfRounds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberOfRounds:number = parseInt(e.currentTarget.value);
    if(numberOfRounds < 3 || numberOfRounds > 20 || !numberOfRounds) return;
    
    dispatch(setNumberOfRounds(numberOfRounds));
    
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeading}>
        <h1>Settings</h1>
        <div className={styles.modalButtons}>
        <BsQuestion  
        onClick={() => dispatch(changeContent('howToPlay'))}
        className={styles.modalButton}/>
        <CgClose
        className={styles.modalButton}
          onClick={() => dispatch(closeModal())}
        />
        </div>
      </div>
      <div className={styles.modalContent}>
        Change Difficulty: 
        <select defaultValue={difficulty} onChange={(e) => dispatch(setDifficulty(e.target.value))}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        Select number of rounds: 
        <input defaultValue={numOfRounds} type='number' max={20} min={3} onChange={(e)=> changeNumberOfRounds(e)}/>
      </div>
    </div>
  )
}

export default SettingsModal