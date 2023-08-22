import { LayoutPage } from '@/components/Layout/LayoutPage.tsx';
import { HeaderUserCount } from '@/pages/Home/HeaderUserCount.tsx';
import { MainUserList } from '@/pages/Home/MainUserList.tsx';

const HomePage: FC = () => {
  return (
    <LayoutPage>
      <HeaderUserCount />
      <MainUserList />
    </LayoutPage>
  );
};

export default HomePage;
