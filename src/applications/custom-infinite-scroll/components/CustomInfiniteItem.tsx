import type { CustomInfiniteItemTypes } from "../types/custon-infinite.types";
import styles from "./custom-infinite.module.css";
interface CustomInfiniteProps {
  elem: CustomInfiniteItemTypes;
}

const CustomInfiniteItem = ({ elem }: CustomInfiniteProps) => {
  return (
    <div key={elem.id} className={styles.single_item}>
      <h5>{elem.title}</h5>
      <p>{elem.body}</p>
    </div>
  );
};

export default CustomInfiniteItem;
