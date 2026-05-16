import type { CustomFetchItemTypes } from "../types/custom-fetch.types";
import styles from "./custom-fetch.module.css";

interface CustomFetchItemProps {
  item: CustomFetchItemTypes;
}

const CustomFetchItem = ({ item }: CustomFetchItemProps) => {
  return (
    <div className={styles.single_item}>
      <h5>{item.title}</h5>
      <p>{item.body}</p>
    </div>
  );
};

export default CustomFetchItem;
