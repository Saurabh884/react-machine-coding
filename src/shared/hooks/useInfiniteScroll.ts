import { useEffect } from "react";

interface UseInfiniteCustomProps {
  isLoading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const useInfiniteScroll = ({ isLoading, setPage }: UseInfiniteCustomProps) => {
  const intersectionObserver = () => {
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (innerHeight + scrollTop > scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", intersectionObserver);

    return () => {
      window.removeEventListener("scroll", intersectionObserver);
    };
  }, [isLoading]);
  return {};
};

export default useInfiniteScroll;
