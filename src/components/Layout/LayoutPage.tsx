import { Box } from '@chakra-ui/react';

export const LayoutPage: FC<ChildrenProp> = ({ children }) => {
  return (
    <Box as={'main'} minW={'100vw'} minH={'100vh'}>
      {children}
    </Box>
  );
};
