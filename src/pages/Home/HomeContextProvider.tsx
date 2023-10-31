import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { UserListQuery$data } from '@/pages/Home/__generated__/UserListQuery.graphql';

export interface HomeContextValue {
  loadTimes: number;
  cursor: string | null;
  hasMore: boolean;
  loadMore: () => void;
  data: UserListQuery$data | null;
  setData: Dispatch<SetStateAction<UserListQuery$data | null>>;
  allEdges: NonNullable<UserListQuery$data['search']['edges']>;
}
export const HomeContext = createContext({} as HomeContextValue);
export const useHomeContext = () => useContext(HomeContext);

export const HomeContextProvider: FC<ChildrenProp> = ({ children }) => {
  const [data, setData] = useState<UserListQuery$data | null>(null);
  const [loadTimes, setLoadTimes] = useState<number>(0);
  const [cursor, setCursor] = useState<string | null>(null);
  const [allEdges, setAllEdges] = useState<
    NonNullable<UserListQuery$data['search']['edges']>
  >([]);

  const edges = data?.search?.edges;

  // Add incomming edges to allEdges
  useEffect(() => {
    if (!edges) return;

    setAllEdges((prev) => {
      // prevent duplicated edges
      const newEdges = edges.filter((edge) => {
        const cursor = edge?.cursor;
        if (!cursor) return false;
        return !prev.find((e) => e?.cursor === cursor);
      });
      return [...prev, ...newEdges];
    });
  }, [edges]);

  // Only refetch users 40 times (max 1000 users)
  const hasMore: boolean = edges
    ? !!(edges.length && loadTimes < 40)
    : loadTimes === 0;

  const loadMore = useCallback(() => {
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
        setData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
