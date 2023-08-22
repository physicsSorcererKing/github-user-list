import { ReactElement, useMemo } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { List } from '@chakra-ui/react';

import { UserListItem } from '@/components/ListItem/UserListItem.tsx';

import { UserListQuery as UserListQueryType } from './__generated__/UserListQuery.graphql';

const UserListQuery = graphql`
  query UserListQuery($count: Int!, $since: String) {
    search(query: "type:user", type: USER, first: $count, after: $since) {
      edges {
        cursor
        node {
          ... on User {
            login
            avatarUrl
            isSiteAdmin
          }
        }
      }
    }
  }
`;

export const UserList: FC = () => {
  const data = useLazyLoadQuery<UserListQueryType>(UserListQuery, {
    count: 20,
    since: null,
  });

  const userListItems = useMemo(() => {
    const edges = data?.search?.edges;
    if (edges === null) return null;

    const result: ReactElement[] = [];

    edges.forEach((edge) => {
      const node = edge?.node;
      if (!node) return null;
      result.push(<UserListItem key={node.login} user={node} />);
    });
    return result;
  }, [data.search.edges]);

  return <List>{userListItems}</List>;
};
