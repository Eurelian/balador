import type { NextPage } from "next";

import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Box h="100vh">
      <Hero />
      <Box>Some Div</Box>
    </Box>
  );
};

export default Home;
