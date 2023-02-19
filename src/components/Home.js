import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetArticlesQuery } from "../features/apiSlice";

const Home = () => {
  const { isLoading, data, error } = useGetArticlesQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error - {error}</p>}
      {data && (
        <div>
          {data.map((d) => {
            return (
              <div>
                <p>{d.id}</p>
                <Link to={`/${d.id}`}>
                  <button>Read more...</button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
