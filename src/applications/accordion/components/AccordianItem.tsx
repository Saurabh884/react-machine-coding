import type { accordianItemType } from "../types/accordion.types";
import styles from "./accordion.module.css";

interface AccordianItemprops {
  item: accordianItemType;
  handleClick: (itemId: number) => void;
  isExpanded: number | null;
}

const AccordianItem = ({
  item,
  handleClick,
  isExpanded,
}: AccordianItemprops) => {
  return (
    <div className={styles.accordian}>
      <button className={styles.button} onClick={() => handleClick(item.id)}>
        {item.name}
      </button>
      {isExpanded === item.id && <p>{item.profession}</p>}
    </div>
  );
};

export default AccordianItem;
