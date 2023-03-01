import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { toggleGameRunning } from "../store/slices/playthrough-slice";
import { useFetchData } from "../hooks/useFetchData";

export const StartTheGame = () => {
    const dispatch = useAppDispatch();
    const difficulty = useAppSelector(state => state.settings.difficulty)
    dispatch(toggleGameRunning(true));
    dispatch(useFetchData(difficulty));
  };


