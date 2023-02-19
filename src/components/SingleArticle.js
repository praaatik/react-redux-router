import { useParams } from "react-router";

const SingleArticle = () => {
  const { id } = useParams();

  return <h1>SingleArticle for {id}</h1>;
};

export default SingleArticle;
