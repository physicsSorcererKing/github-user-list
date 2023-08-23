import { HeaderUserCount } from '@/pages/Home/HeaderUserCount.tsx';
import { MainUserList } from '@/pages/Home/MainUserList.tsx';

const HomePage: FC = () => {
  return (
    <>
      <HeaderUserCount />
      <MainUserList />
    </>
  );
};

export default HomePage;
