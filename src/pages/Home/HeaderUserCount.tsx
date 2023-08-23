import { Container, Flex, Heading } from '@chakra-ui/react';

import { useHomeContext } from '@/pages/Home/HomeContextProvider.tsx';

export const HeaderUserCount: FC = () => {
  const { allEdges } = useHomeContext();

  return (
    <Flex
      as={'header'}
      w={'100vw'}
      h={'60px'}
      bg={'purple.600'}
      justify={'center'}
      align={'center'}
      pos={'fixed'}
    >
      <Container maxW={'container.xl'}>
        <Heading as={'h2'} size={'lg'} textAlign={'center'}>
          User Count: {allEdges.length}
        </Heading>
      </Container>
    </Flex>
  );
};
