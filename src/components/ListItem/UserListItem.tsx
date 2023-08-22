import { Badge, Flex, Image, ListItem, Text } from '@chakra-ui/react';

type User = {
  login?: string;
  avatarUrl?: string;
  isSiteAdmin?: boolean;
};

type UserListItemProps = {
  user: User;
};

export const UserListItem: FC<UserListItemProps> = ({ user }) => {
  const { login, avatarUrl, isSiteAdmin } = user;
  return (
    <ListItem
      pl={4}
      pr={3}
      py={3}
      borderRadius={'md'}
      transition={'background 0.2s ease-in-out'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}
    >
      <Flex gap={4}>
        <Image
          src={avatarUrl}
          alt={login}
          boxSize={'48px'}
          objectFit={'cover'}
          borderRadius={'full'}
        />
        <Flex direction={'column'} justify={'center'} flex={1} gap={1}>
          <Text>{login}</Text>
          {isSiteAdmin && <Badge>Site Admin</Badge>}
        </Flex>
      </Flex>
    </ListItem>
  );
};
