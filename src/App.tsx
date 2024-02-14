import { useState } from "react";
import { UsersPage } from "./pages/UsersPage";
import { UserPage } from "./pages/UserPage";
import { useAppSelector } from "./store/hooks";
import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { CreatePost } from "./pages/CreatePost";


const App = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [postId, setPostId] = useState<number | null>(null);
  const store = useAppSelector(state => state);

  console.log({store})

  return (
    <div className="App">
      <UsersPage onUserClick={user => setUserId(user.id)} />
      {userId && <UserPage userId={userId} />}
      <PostsPage onPostClick={post => setPostId(post.id)} />
      {postId && <PostPage postId={postId} />}
      <CreatePost />
    </div>
  )
}

export default App
