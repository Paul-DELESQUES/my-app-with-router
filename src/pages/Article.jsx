import { useLoaderData } from "react-router-dom";

function Article() {
  const data = useLoaderData();

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </article>
  );
}

export default Article;
