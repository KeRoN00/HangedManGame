import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useFetchData } from "../hooks/useFetchData";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import { incrementScore, resetMistakes } from "../store/slices/playthrough-slice";
import { ResetKeyboard } from "./ResetKeyboard";


export const goToNextRoundHandler = (success?: boolean) => {
    const dispatch = useAppDispatch();
    const difficulty = useAppSelector((state) => state.settings.difficulty);

    success && dispatch(incrementScore());
    dispatch(resetKeyArray());
    ResetKeyboard();
    dispatch(resetMistakes());
    dispatch(useFetchData(difficulty));
  };