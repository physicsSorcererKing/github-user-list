import { Container, Heading } from '@chakra-ui/react';

export const HeaderUserCount: FC = () => {
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
        User Count: {20}
      </Heading>
    </Container>
  );
};
