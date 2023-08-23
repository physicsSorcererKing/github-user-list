import { Outlet } from 'react-router';
import { Box } from '@chakra-ui/react';

export const LayoutPage: FC<ChildrenProp> = () => {
  return (
    <Box minW={'100vw'} minH={'100vh'}>
      <Outlet />
    </Box>
  );
};
