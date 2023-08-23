import { ReactElement, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, List, Text } from '@chakra-ui/react';

import { UserListItem } from '@/components/ListItem/UserListItem.tsx';
import { useHomeContext } from '@/pages/Home/HomeContextProvider.tsx';

export const MainUserList: FC = () => {
  const { allEdges, loadMore, hasMore } = useHomeContext();

  const userListItems = useMemo(() => {
    if (allEdges === null) return null;

    const result: ReactElement[] = [];

    allEdges.forEach((edge) => {
      const cursor = edge?.cursor;
      const node = edge?.node;
      if (!node || !cursor) return null;
      result.push(<UserListItem key={edge?.cursor} user={node} />);
    });
    return result;
  }, [allEdges]);

  return (
    <Container as={'main'} maxW={'container.xl'} pt={'60px'}>
      <InfiniteScroll
        next={loadMore}
        hasMore={hasMore}
        loader={<Text>Loading...</Text>}
        dataLength={userListItems?.length ?? 0}
      >
        <List>{userListItems}</List>
      </InfiniteScroll>
    </Container>
  );
};
