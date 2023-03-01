export const DisableKey = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (e.target as HTMLButtonElement).toggleAttribute('disabled');
  }

