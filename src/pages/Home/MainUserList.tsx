import { ReactElement, Suspense, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, Flex, List, Spinner } from '@chakra-ui/react';

import { UserListItem } from '@/components/ListItem/UserListItem.tsx';
import { useHomeContext } from '@/pages/Home/HomeContextProvider.tsx';
import { MainUserListLoader } from '@/pages/Home/MainUserListLoader.tsx';

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

  const dataLength: number = userListItems?.length ?? 0;

  return (
    <Container
      as={'main'}
      id={'main-scrollable'}
      maxW={'container.xl'}
      pt={'60px'}
      h={`min(100vh, ${dataLength * 50}px)`}
      bg={'purple.900'}
      maxH={'100vh'}
      overflowY={'auto'}
    >
      <InfiniteScroll
        next={loadMore}
        hasMore={hasMore}
        loader={
          <Suspense
            fallback={
              <Flex h={'60px'} justify={'center'} align={'center'}>
                <Spinner />
              </Flex>
            }
          >
            <MainUserListLoader />
          </Suspense>
        }
        dataLength={dataLength}
        scrollableTarget={'main-scrollable'}
        scrollThreshold={'50px'}
      >
        <List>{userListItems}</List>
      </InfiniteScroll>
    </Container>
  );
};
