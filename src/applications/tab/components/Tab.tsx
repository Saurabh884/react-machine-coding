import { useState } from "react";
import { tabData } from "../data/tabData";
import TabItem from "./TabItem";
import styles from "./tab.module.css";
const Tab = () => {
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  const handleClick = (itemId: number) => {
    setIsExpanded((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.tab_header}>Tab Switch</h2>
      <div className={styles.tab_container}>
        {tabData.length > 0 &&
          tabData.map((item) => (
            <TabItem
              key={item.id}
              item={item}
              handleClick={handleClick}
              isExpanded={isExpanded}
            />
          ))}
      </div>
    </div>
  );
};

export default Tab;
