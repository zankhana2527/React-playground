import { Box, Text, Button, HStack } from "@chakra-ui/react";

const PageLayout = ({ pageTitle, element, data, refetch }) => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Text fontSize="xl">{pageTitle}</Text>
        <Button colorScheme="purple" size="sm" onClick={refetch}>
          Fetch {element}
        </Button>
      </HStack>
      <Box my="20px">
        {data?.data.map((hero) => {
          return <Text key={hero.id}>{hero.name}</Text>;
        })}
      </Box>
    </Box>
  );
};

export default PageLayout;
