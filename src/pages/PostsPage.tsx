import { Post } from "../models";
import { useGetPostsQuery } from "../store/slices"

type PostsPageProps = {
  onPostClick: (post: Post) => void;
}

export const PostsPage: React.FC<PostsPageProps> = ({onPostClick}) => {
  const {data: posts, error, isLoading} = useGetPostsQuery(undefined);

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => onPostClick(post)}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}