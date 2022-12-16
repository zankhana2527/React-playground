import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Home.page";
import RQSuperherospage from "./components/RQSuperheros.page";
import Superherospage from "./components/Superheros.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQBookspage from "./components/RQBooks.page";
import RQPostsPage from "./components/RQPosts.page";
import { ChakraProvider, HStack, Box } from "@chakra-ui/react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Box bg="purple.700" py="10px" color="White">
          <HStack spacing={"24px"} m="auto" w="80%">
            <Box>
              <Link to={"/"}>Home</Link>
            </Box>
            <Box>
              <Link to={"/superheroes"}>Traditional Superheros</Link>
            </Box>
            <Box>
              <Link to={"/rq-superheroes"}>RQ Superheros</Link>
            </Box>
            <Box>
              <Link to={"/rq-books"}>RQ Books</Link>
            </Box>
            <Box>
              <Link to={"/rq-posts"}>RQ Posts</Link>
            </Box>
          </HStack>
        </Box>
        <Box w="80%" m="auto" py="20px">
          <Routes>
            <Route element={<Homepage />} path="/" />
            <Route element={<Superherospage />} path="/superheroes" />
            <Route element={<RQSuperherospage />} path="/rq-superheroes" />
            <Route element={<RQBookspage />} path="/rq-books" />
            <Route element={<RQPostsPage />} path="/rq-posts" />
          </Routes>
        </Box>
        <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
