import { useAppDispatch } from "../hooks/storeHooks";
import { addKeyToArray } from "../store/slices/keyboard-slice";
import { DisableKey } from "./DisableKey";

export const handleKeyPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: string
  ) => {
    const dispatch = useAppDispatch();

    DisableKey(e);
    dispatch(addKeyToArray(key));
  };