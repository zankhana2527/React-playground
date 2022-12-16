import { useFetchData } from "../hooks/useFetchData";

const RQPostsPage = () => {
  console.log(
    "Krupa",
    useFetchData("posts", "http://localhost:5000/posts", false)
  );

  const { isLoading, isError, error, data, refetch } = useFetchData(
    "posts",
    "http://localhost:5000/posts",
    false
  );
  return (
    <div>
      <h1>RQPostPage</h1>
      <button onClick={refetch}>Fetch Books</button>
      {data?.data.map((book) => (
        <p key={book.id}>{book.name}</p>
      ))}
    </div>
  );
};

export default RQPostsPage;
