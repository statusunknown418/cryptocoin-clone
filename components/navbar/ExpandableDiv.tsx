import { useState } from "react";
import styles from "../../styles/modules/expandableDiv.module.scss";
type Props = {};

export const ExpandableDiv: React.FC<Props> = () => {
  const [expand, setExpand] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  // Declaring expandable modules
  const handleExpand = () => {
    return <div></div>;
  };

  const showSelectors = (current) => {
    return <div>{current}</div>;
  };
  return (
    <div>
      <span
        className={styles.container}
        onClick={() => {
          expand ? setExpand(false) : setExpand(true);
        }}
      >
        {currentLang}
      </span>
      {expand && (
        <div>
          <div>
            <p>Language Selector</p>
            <button>
              {currentLang} <i></i>
            </button>
            {expand && showSelectors}
          </div>
          <div>
            <p>Currency Selector</p>
            <button
              onClick={() => {
                //TODO finish this crap
                expand ? setExpand(false) : setExpand(true);
              }}
            >
              {currentCurrency} <i></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
