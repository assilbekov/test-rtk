import { useCreatePostMutation } from "../store/slices"


export const CreatePost: React.FC = () => {
  const [createPost, postResult] = useCreatePostMutation();

  return (
    <div>
      <h1>Create Post</h1>
      <button onClick={() => {
        createPost({ title: "New Post", body: "This is the body of the new post", userId: 100});
      }}>Create Post</button>
    </div>
  )
}