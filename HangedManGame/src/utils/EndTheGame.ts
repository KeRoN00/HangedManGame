import { useAppDispatch } from "../hooks/storeHooks";
import { resetKeyArray } from "../store/slices/keyboard-slice";
import { endTheGame } from "../store/slices/playthrough-slice";

export const EndTheGame = () => {
  const dispatch = useAppDispatch();
  dispatch(resetKeyArray());
  dispatch(endTheGame());
};
