import { HeaderUserCount } from '@/pages/Home/HeaderUserCount.tsx';
import { HomeContextProvider } from '@/pages/Home/HomeContextProvider.tsx';
import { MainUserList } from '@/pages/Home/MainUserList.tsx';

const HomePage: FC = () => {
  return (
    <HomeContextProvider>
      <HeaderUserCount />
      <MainUserList />
    </HomeContextProvider>
  );
};

export default HomePage;
