import { useEffect, useState } from "react";
import type { CustomFetchItemTypes } from "../../applications/custom-fetch/types/custom-fetch.types";

const useFetch = (url: string) => {
  const [data, setData] = useState<CustomFetchItemTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`${res.statusText}`);
        }
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message !== "AbortError") {
            console.log("Fetch safely aborted via cleanup");
            return;
          }
          setIsError(error.message);
        } else {
          setIsError("An unknown error occurred");
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
  }, [url]);

  return { data, isLoading, isError };
};
export default useFetch;
