import { Flex, FlexProps, Spinner } from '@chakra-ui/react';

export const LoadingCover: FC<FlexProps> = ({ ...flexProps }) => {
  return (
    <Flex
      w={'full'}
      h={'full'}
      position={'absolute'}
      top={0}
      left={0}
      justify={'center'}
      align={'center'}
      zIndex={'overlay'}
      bg={'blackAlpha.400'}
      {...flexProps}
    >
      <Spinner />
    </Flex>
  );
};
