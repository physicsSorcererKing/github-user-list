import { Container, Heading } from '@chakra-ui/react';

import { useHomeContext } from '@/pages/Home/HomeContextProvider.tsx';

export const HeaderUserCount: FC = () => {
  const { allEdges } = useHomeContext();

  return (
    <Container
      as={'header'}
      maxW={'container.xl'}
      h={'60px'}
      bg={'blackAlpha.200'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Heading as={'h2'} size={'lg'} textAlign={'center'}>
        User Count: {allEdges.length}
      </Heading>
    </Container>
  );
};
