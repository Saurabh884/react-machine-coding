import { useEffect, useState } from "react";
import styles from "./pagination.module.css";
import type { PaginationItemType } from "../types/pagination.types";

const Pagination = () => {
  const [data, setData] = useState<PaginationItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  const PRODUCT_PER_PAGE = 9;

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const res = await fetch(
          `https://dummyjson.com/products?limit=${PRODUCT_PER_PAGE}&skip=${(page - 1) * PRODUCT_PER_PAGE}`,
          {
            signal: controller.signal,
          },
        );
        if (!res.ok) {
          throw new Error(`${res.statusText}`);
        }
        const resData = await res.json();
        setData(resData?.products);
        setTotalPage(Math.ceil(resData?.total / PRODUCT_PER_PAGE));
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

  if (isError) return <div>{isError}</div>;
  if (isLoading) return <h4>Loading...</h4>;

  return (
    <div>
      <h4>Pagination app</h4>
      <div className={styles.items_container}>
        {data.length > 0 &&
          data.map((item) => (
            <div key={item.id}>
              <img
                className={styles.image}
                src={item.thumbnail}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      <div className={styles.button_container}>
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        {[...Array(totalPage).keys()].map((num) => (
          <button
            className={`${page === num + 1 ? styles.isActive : ""}`}
            onClick={() => handlePageChange(num + 1)}
            key={num}
          >
            {num + 1}
          </button>
        ))}
        <button
          disabled={page === totalPage}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
