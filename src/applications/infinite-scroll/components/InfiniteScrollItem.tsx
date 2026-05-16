import type { InfiniteScrollItemTypes } from "../types/infinite-scroll.types";
import styles from "./infinite-scroll.module.css";

interface InfiniteScrollProps {
  item: InfiniteScrollItemTypes;
}

const InfiniteScrollItem = ({ item }: InfiniteScrollProps) => {
  return (
    <div className={styles.singleItem_container}>
      <h5>{item.title}</h5>
      <p>{item.body}</p>
    </div>
  );
};

export default InfiniteScrollItem;
