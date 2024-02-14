import { useGetPostQuery } from "../store/slices";

type PostPageProps = {
  postId: number;
}

export const PostPage: React.FC<PostPageProps> = ({ postId }) => {
  const { data: post, error, isLoading } = useGetPostQuery(postId);

  return (
    <div>
      <h1>Post</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}