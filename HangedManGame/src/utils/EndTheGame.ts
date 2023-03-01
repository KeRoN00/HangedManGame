import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import {
  resetMistakes,
  resetScore,
  toggleGameRunning,
} from "../store/slices/playthrough-slice";

export const EndTheGame = () => {
  const dispatch = useAppDispatch();

  dispatch(resetMistakes());
  dispatch(resetScore());
  dispatch(resetKeyArray());

  dispatch(toggleGameRunning(false));
};
