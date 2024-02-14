import { useGetPostQuery, useGetUserQuery } from "../store/slices";

type PostPageProps = {
  postId: number;
}

export const PostPage: React.FC<PostPageProps> = ({ postId }) => {
  const { data: post, error, isLoading } = useGetPostQuery(postId);
  const {data: user} = useGetUserQuery(post?.userId || 0, {skip: !post});

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
      {user && (
        <div>
          <h2>Author</h2>
          <p>{user.name}</p>
        </div>
      )}
    </div>
  )
}