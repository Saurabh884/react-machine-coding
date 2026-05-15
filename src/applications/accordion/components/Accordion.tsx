import { useState } from "react";
import { accordianData } from "../data/accordionData";
import styles from "./accordion.module.css";
import AccordianItem from "./AccordianItem";

const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  const handleClick = (itemId: number) => {
    setIsExpanded((prev) => (prev == itemId ? null : itemId));
  };

  return (
    <div className={styles.container}>
      {accordianData.length > 0 &&
        accordianData.map((item) => (
          <AccordianItem
            key={item.id}
            item={item}
            handleClick={handleClick}
            isExpanded={isExpanded}
          />
        ))}
    </div>
  );
};

export default Accordion;
