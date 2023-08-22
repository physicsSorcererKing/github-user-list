type User = {
  login: string;
  avatarUrl: string;
  isSiteAdmin: boolean;
};

type UserListItemProps = {
  user: User;
};

export const UserListItem: FC<UserListItemProps> = ({ user }) => {
  const { login, avatarUrl, isSiteAdmin } = user;
  return (
    <li>
      <img src={avatarUrl} alt={login} />
      <span>{login}</span>
      {isSiteAdmin && <span>Site Admin</span>}
    </li>
  );
};
