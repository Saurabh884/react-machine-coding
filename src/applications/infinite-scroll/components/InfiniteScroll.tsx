import { useEffect, useState } from "react";
import styles from "./infinite-scroll.module.css";
import InfiniteScrollItem from "./InfiniteScrollItem";
import type { InfiniteScrollItemTypes } from "../types/infinite-scroll.types";

const InfiniteScroll = () => {
  const [data, setData] = useState<InfiniteScrollItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=18&_page=${page}`,
          {
            signal: controller.signal,
          },
        );
        if (!res.ok) {
          throw new Error(`${res.statusText}`);
        }
        const resData = await res.json();

        setData((prev) => [...prev, ...resData]);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== "AbortError") {
            setIsError(error.message);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [page]);

  const handleInfiniteScroll = () => {
    const innerHeight = window.innerHeight;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (innerHeight + scrollTop > scrollHeight - 45 && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [isLoading]);

  if (isError) return <div>{isError}</div>;

  return (
    <div className={styles.main_container}>
      <h4>Infinite Scroll</h4>
      <div className={styles.item_container}>
        {data.length > 0 &&
          data.map((item) => (
            <InfiniteScrollItem key={item.userId} item={item} />
          ))}
      </div>
      {isLoading && <h3>Loading...</h3>}
    </div>
  );
};

export default InfiniteScroll;
