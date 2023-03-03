export interface WordPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    isLoading: boolean;
    splittedWordArray: string[];
    keys: string[];
  }