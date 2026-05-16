import styles from "./custom-fetch.module.css";
import CustomFetchItem from "./CustomFetchItem";
import useFetch from "../../../shared/hooks/useFetch";

const CustomFetch = () => {
  const { data, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (isError) return <div>{isError}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.main_container}>
      <h3>Custom Fetch Application</h3>
      <div className={styles.item_container}>
        {data?.length > 0 &&
          data?.map((item) => <CustomFetchItem key={item.title} item={item} />)}
      </div>
    </div>
  );
};

export default CustomFetch;
