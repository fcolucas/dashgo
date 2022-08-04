import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Francisco Lucas</Text>
          <Text color="gray.300" fontSize="small">
            fcolucaslima14@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Francisco Lucas"
        src="https://github.com/fcolucas.png"
      />
    </Flex>
  );
};
