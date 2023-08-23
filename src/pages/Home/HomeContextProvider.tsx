import { createContext, useContext } from 'react';

export const HomeContext = createContext({});
export const useHomeContext = () => useContext(HomeContext);

export const HomeContextProvider: FC<ChildrenProp> = ({ children }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};
