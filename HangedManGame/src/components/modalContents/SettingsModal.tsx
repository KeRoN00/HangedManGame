import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { BsQuestion } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { changeContent, closeModal } from '../../store/slices/modal-slice'
import styles from '../styles.module.css'
import { setDifficulty, setNumberOfRounds } from '../../store/slices/settings-slice'

const SettingsModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const {difficulty, numOfRounds } = useAppSelector((state)=> state.settings)
  const [error, setError] = useState<boolean>(false);
  
  const changeNumberOfRounds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberOfRounds:number = parseInt(e.currentTarget.value);
    const inputElement = document.getElementById('numOfRounds') as HTMLInputElement;
    if(numberOfRounds < 3 || numberOfRounds > 20 || isNaN(numberOfRounds)) {
      if(inputElement.value.trim().length == 0) return;
      setError(true);
      return;
    } else {
      dispatch(setNumberOfRounds(numberOfRounds));
      setError(false);
    }
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
      <div>
        <h3>Change Difficulty:</h3> 
        <select className={styles.settingsInput} defaultValue={difficulty} onChange={(e) => dispatch(setDifficulty(e.target.value))}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <h3>Select number of rounds:</h3> 
        <input id="numOfRounds" className={styles.settingsInput} defaultValue={numOfRounds} placeholder="choose from 3 to 20" type='text'  onChange={(e)=> changeNumberOfRounds(e)}/>
        {error && <div style={{color: 'red'}}>Choose between 3 and 20!</div>}
      </div>
    </div>
  )
}

export default SettingsModal