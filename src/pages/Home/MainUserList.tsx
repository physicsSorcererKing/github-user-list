import { Container } from '@chakra-ui/react';

import { UserList } from '@/components/List/UserList.tsx';

export const MainUserList: FC = () => {
  return (
    <Container as={'main'} maxW={'container.xl'}>
      <UserList />
    </Container>
  );
};
