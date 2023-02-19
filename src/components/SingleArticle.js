import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGetArticlesByIdQuery } from "../features/apiSlice";

const SingleArticle = () => {
  const { id } = useParams();
  const { error, data, isLoading } = useGetArticlesByIdQuery(id);

  return (
    <div>
      <h1>SingleArticle for {id}</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error - {error}</p>}
      {data && (
        <div>
          <p>data?.id</p>
        </div>
      )}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default SingleArticle;
