import { WordPanelProps } from "../types/@interfaces";
import styles from "./styles.module.css"

export const WordPanel: React.FunctionComponent<WordPanelProps> = (
    props: WordPanelProps
  ) => {
    const { isLoading, splittedWordArray, keys } = props;
    return (
      <section className={styles.panelLeftWord}>
        {isLoading ? (
          <div className={styles.loader}/>
        ) : (
          <div>
            {splittedWordArray.map((c, idx) => (
              <span key={idx}> {keys.includes(c) ? c : "_"} </span>
            ))}
          </div>
        )}
      </section>
    );
  };