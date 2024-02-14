import { User } from "../models";
import { useGetUsersQuery } from "../store/slices"

type UsersPageProps = {
  onUserClick: (user: User) => void;
}

export const UsersPage: React.FC<UsersPageProps> = ({onUserClick}) => {
  const {data: users, isLoading, error} = useGetUsersQuery(10);
  
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {users && (
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => onUserClick(user)}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}