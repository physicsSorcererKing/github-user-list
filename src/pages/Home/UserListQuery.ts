import { graphql } from 'react-relay';

export const UserListQuery = graphql`
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
