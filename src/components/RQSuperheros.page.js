import { useQuery } from "react-query";
import axios from "axios";
import { Box, Text, Button, HStack } from "@chakra-ui/react";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:5000/superheros");
};

const RQSuperherospage = () => {
  const onSuccess = (data) => {
    console.log("sucess after effect", data);
  };

  const onError = (error) => {
    console.log("error after effect", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperheroes,
    {
      // cacheTime: 5000,
      // staleTime: 1000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: "always",
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
      enabled: false,
      onSuccess,
      onError,
      //   select: (data) => {
      //     const superHeroNames = data.data.map((hero) => hero.name);
      //     return superHeroNames;
      //   },
    }
  );

  //   console.log({ isLoading, isFetching });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Box>
      <HStack justifyContent="space-between">
        <Text fontSize="xl">RQSuperherospage</Text>
        <Button colorScheme="purple" size="sm" onClick={refetch}>
          Fetch data
        </Button>
      </HStack>
      <Box my="20px">
        {data?.data.map((hero) => {
          return <Text key={hero.id}>{hero.name}</Text>;
        })}
      </Box>
      {/* {data.map((hero) => {
        return <div key={hero}>{hero}</div>;
      })} */}
    </Box>
  );
};

export default RQSuperherospage;
