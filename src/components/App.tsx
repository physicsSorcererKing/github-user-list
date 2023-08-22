import { Container } from '@chakra-ui/react';

import { UserList } from '@/components/List/UserList.tsx';

export const App = () => {
  return (
    <Container maxW={'container.xl'} minH={'100vh'}>
      <UserList />
    </Container>
  );
};
