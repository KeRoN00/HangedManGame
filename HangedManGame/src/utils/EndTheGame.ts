import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleGameRunning } from "../store/slices/playthrough-slice";


export const StartTheGame = () => {
    const dispatch = useAppDispatch();
    const {score, currentRound, mistakes} = useAppSelector(state => state.playthrough)

    // reset currentRoundvalue, 
    // reset mistakes, 
    // reset score,
    // 
    
    dispatch(toggleGameRunning(false));
  };