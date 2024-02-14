import { useGetUserQuery } from "../store/slices";


type UserPageProps = {
  userId: number;
}

export const UserPage: React.FC<UserPageProps> = ({userId}) => {
  const {data: user, error, isLoading} = useGetUserQuery(userId, {refetchOnMountOrArgChange: true});

  return (
    <div>
      <h1>User</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </div>
  )
}