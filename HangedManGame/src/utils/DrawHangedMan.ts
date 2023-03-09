import { HangedManParts } from "../components/hangedMan/HangedManPart";

export const DrawHangedMan = (
  items: HangedManParts[],
  mistakes: number,
  difficulty: string
) => {
  if (mistakes == 0) {
    const newItemsShown = items.map((item) => ({ ...item, isShown: false }));
    return newItemsShown;
  } else {
    switch (difficulty) {
      case "easy":
        let newItemsShownEasy = [...items];
        newItemsShownEasy[mistakes - 1] = {
          ...newItemsShownEasy[mistakes - 1],
          isShown: true,
        };
        return newItemsShownEasy;
      case "medium":
        let newItemsShownMedium = [...items];
        if (mistakes == 6) {
          newItemsShownMedium = [...items];
          newItemsShownMedium[mistakes - 1] = {
            ...newItemsShownMedium[mistakes - 1],
            isShown: true,
          };
          newItemsShownMedium[mistakes] = {
            ...newItemsShownMedium[mistakes],
            isShown: true,
          };
          return newItemsShownMedium;
        }
        if (mistakes == 7) {
          newItemsShownMedium = [...items];

          newItemsShownMedium[mistakes] = {
            ...newItemsShownMedium[mistakes],
            isShown: true,
          };
          return newItemsShownMedium;
        }
        if (mistakes == 8) {
          newItemsShownMedium = [...items];

          newItemsShownMedium[mistakes] = {
            ...newItemsShownMedium[mistakes],
            isShown: true,
          };
          newItemsShownMedium[mistakes + 1] = {
            ...newItemsShownMedium[mistakes + 1],
            isShown: true,
          };
          return newItemsShownMedium;
        }

        newItemsShownMedium[mistakes - 1] = {
          ...newItemsShownMedium[mistakes - 1],
          isShown: true,
        };
        return newItemsShownMedium;
      case "hard":
        let newItemsShownHard = [...items];
        if(mistakes == 6) {
            newItemsShownHard = [...items];
            newItemsShownHard[mistakes-1] = {
                ...newItemsShownHard[mistakes-1],
                isShown: true,
              };
            for(let i=0;i<4;i++){
                newItemsShownHard[mistakes+i] = {
                    ...newItemsShownHard[mistakes+i],
                    isShown: true,
                  };
            }
            return newItemsShownHard;
        }
        newItemsShownHard[mistakes - 1] = {
          ...newItemsShownHard[mistakes - 1],
          isShown: true,
        };
        return newItemsShownHard;
      default:
        return items;
    }
  }
};
