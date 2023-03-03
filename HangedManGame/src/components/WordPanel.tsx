import { WordPanelProps } from "../types/@interfaces";


export const WordPanel: React.FunctionComponent<WordPanelProps> = (
    props: WordPanelProps
  ) => {
    const { isLoading, splittedWordArray, keys } = props;
    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {splittedWordArray.map((c, idx) => (
              <span key={idx}> {keys.includes(c) ? c : "_"} </span>
            ))}
          </div>
        )}
      </div>
    );
  };