import { graphql } from 'react-relay';

export const UserFragment = graphql`
  fragment UserFragment on User {
    login
    avatarUrl
    isSiteAdmin
  }
`;
