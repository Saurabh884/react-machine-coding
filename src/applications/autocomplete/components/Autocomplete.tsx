import { useEffect, useState } from "react";
import styles from "./autocomplete.module.css";
import type { AutocompleteItemTypes } from "../types/autocomplete.types";

const Autocomplete = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<AutocompleteItemTypes[]>([]);
  const [showResults, setshowResults] = useState<boolean>(false);
  const [cache, setCache] = useState<Record<string, AutocompleteItemTypes[]>>(
    {},
  );

  const fetchData = async () => {
    if (cache[input]) {
      console.log("CACHE Returned", input);
      setData(cache[input]);
      return;
    }

    const res = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const resData = await res.json();
    setData(resData?.recipes);
    setCache((prev) => ({ ...prev, [input]: resData?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className={styles.main_container}>
      <h4>Autocomplete app</h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.input_box}
        onFocus={() => setshowResults(true)}
        onBlur={() => setshowResults(false)}
      />
      {showResults && (
        <div className={styles.items_container}>
          {data.length > 0 &&
            data.map((item) => (
              <span className={styles.single_item} key={item.id}>
                {item.name}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
