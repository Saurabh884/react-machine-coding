import { useEffect, useState } from "react";
import styles from "./custom-infinite.module.css";
import type { CustomInfiniteItemTypes } from "../types/custon-infinite.types";
import CustomInfiniteItem from "./CustomInfiniteItem";
import useInfiniteScroll from "../../../shared/hooks/useInfiniteScroll";

const CustomInfinite = () => {
  const [data, setData] = useState<CustomInfiniteItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=15&&_page=${page}`,
          {
            signal: controller.signal,
          },
        );
        if (!res.ok) {
          throw new Error(`${res.statusText}`);
        }

        const json = await res.json();
        setData((prev) => [...prev, ...json]);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message !== "AbortError") {
            return;
          }
          setIsError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [page]);

  useInfiniteScroll({
    isLoading,
    setPage,
  });

  if (isError) return <div>{isError}</div>;
  if (isLoading) return <h4>Loading....</h4>;

  return (
    <div className={styles.app_container}>
      <h4>Custom Infinite Scroll</h4>
      <div className={styles.items_container}>
        {data.length > 0 &&
          data.map((elem) => <CustomInfiniteItem key={elem.id} elem={elem} />)}
      </div>
    </div>
  );
};

export default CustomInfinite;
