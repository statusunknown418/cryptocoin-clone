import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../../styles/modules/ExpandableDiv.module.scss";
type Props = {};
export const ExpandableDiv: React.FC<Props> = () => {
  const [expand, setExpand] = useState(false);
  const [expandSecondary, setExpandSecondary] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  // Declaring expandable modules
  const handleExpand = () => {
    return <div></div>;
  };
  const showSelectors = (current) => {
    return <div>{current}</div>;
  };
  // Icon

  return (
    <div>
      <span
        className={styles.container}
        onClick={() => {
          expand ? setExpand(false) : setExpand(true);
        }}
      >
        {currentLang}
        <span>
          <FontAwesomeIcon icon={faCaretDown} height={15} />
        </span>
        <div></div>
      </span>
      {expand && (
        <div className={styles.toggleExpander}>
          <div>
            <p>Language Selector</p>
            <button
              onClick={() => {
                expandSecondary
                  ? setExpandSecondary(false)
                  : setExpandSecondary(true);
              }}
            >
              {currentLang}{" "}
            </button>
            {expand && showSelectors}
          </div>
          <div>
            <p>Currency Selector</p>
            <button
              onClick={() => {
                expandSecondary
                  ? setExpandSecondary(false)
                  : setExpandSecondary(true);
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
