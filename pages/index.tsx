import type { NextPage } from "next";
import { data } from "../lib/content";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ContentBlock from "../components/ContentBlock";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      {data.map((item, index) => (
        <ContentBlock key={item.title} {...item} index={index} />
      ))}
    </Box>
  );
};

export default Home;
