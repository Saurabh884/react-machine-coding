import type { TabItemType } from "../types/tab.types";
import styles from "./tab.module.css";

interface TabItemProps {
  item: TabItemType;
  handleClick: (itemId: number) => void;
  isExpanded: number | null;
}

const TabItem = ({ item, handleClick, isExpanded }: TabItemProps) => {
  return (
    <div>
      <button
        className={`${styles.tab_button} ${isExpanded === item.id ? styles.active : ""}`}
        onClick={() => handleClick(item.id)}
      >
        {item.title}
      </button>
      {isExpanded === item.id && <p>{item.description}</p>}
    </div>
  );
};

export default TabItem;
