import { useEffect } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { Box } from '@chakra-ui/react';

import { UserListQuery as UserListQueryType } from '@/pages/Home/__generated__/UserListQuery.graphql.ts';
import { useHomeContext } from '@/pages/Home/HomeContextProvider.tsx';
import { UserListQuery } from '@/pages/Home/UserListQuery.ts';

export const MainUserListLoader: FC = () => {
  const { setData, cursor } = useHomeContext();
  const data = useLazyLoadQuery<UserListQueryType>(UserListQuery, {
    count: 20,
    since: cursor,
  });

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return <Box h={'60px'} />;
};
