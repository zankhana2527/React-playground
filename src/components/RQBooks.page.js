import { useFetchData } from "../hooks/useFetchData";
import PageLayout from "../layout/PageLayout";

const RQBookspage = () => {
  const { isLoading, isError, error, data, refetch } = useFetchData(
    "books",
    "http://localhost:5000/books",
    false
  );

  console.log(useFetchData("posts", "http://localhost:5000/books", false));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout
      pageTitle="RQ Books"
      element="book"
      data={data}
      refetch={refetch}
    />
  );
};

export default RQBookspage;
