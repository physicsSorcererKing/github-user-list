import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLazyLoadQuery } from 'react-relay';

import {
  UserListQuery as UserListQueryType,
  UserListQuery$data,
} from '@/pages/Home/__generated__/UserListQuery.graphql';
import { UserListQuery } from '@/pages/Home/UserListQuery.ts';

export interface HomeContextValue {
  loadTimes: number;
  cursor: string | null;
  hasMore: boolean;
  loadMore: () => void;
  data: UserListQuery$data;
  allEdges: NonNullable<UserListQuery$data['search']['edges']>;
}
export const HomeContext = createContext({} as HomeContextValue);
export const useHomeContext = () => useContext(HomeContext);

export const HomeContextProvider: FC<ChildrenProp> = ({ children }) => {
  const [loadTimes, setLoadTimes] = useState<number>(0);
  const [cursor, setCursor] = useState<string | null>(null);
  const [allEdges, setAllEdges] = useState<
    NonNullable<UserListQuery$data['search']['edges']>
  >([]);

  const data = useLazyLoadQuery<UserListQueryType>(UserListQuery, {
    count: 20,
    since: cursor,
  });

  const edges = data?.search?.edges;

  useEffect(() => {
    if (!edges) return;

    setAllEdges((prev) => {
      // prevent duplicated edges
      const newEdges = edges.filter((edge) => {
        const cursor = edge?.cursor;
        // const node = edge?.node;
        if (!cursor) return false;
        return !prev.find((e) => e?.cursor === cursor);
      });
      return [...prev, ...newEdges];
    });
  }, [edges]);

  // Only refetch users 4 times (max 100 users)
  const hasMore = loadTimes < 4;

  const loadMore = useCallback(() => {
    console.log('loadMore');
    if (!hasMore) return;

    if (edges && edges.length) {
      const lastCursor = edges.findLast((e) => e)?.cursor;

      setCursor(lastCursor ?? null);
      setLoadTimes((prev) => prev + 1);
    }
  }, [edges, hasMore]);

  return (
    <HomeContext.Provider
      value={{
        loadTimes,
        cursor,
        hasMore,
        loadMore,
        allEdges,
        data,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
