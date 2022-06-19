import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import CardTitle from "./CardTitle";
type Props = {
  source: string;
  altText: string;
  cardTitle: string;
  cardBody: string;
};

const CustomHeroTitle = ({ text }: { text: string }) => {
  return (
    <Text fontSize="2xl" fontWeight={"600"} color="#0e0e0e">
      {text}
    </Text>
  );
};
const CustomHeroText = ({ text }: { text: string }) => {
  return (
    <Text fontSize="md" fontWeight={"400"} color="gray.600">
      {text}
    </Text>
  );
};

const HeroImage = ({ source, altText, cardTitle, cardBody }: Props) => {
  return (
    <Box w="100%" h="auto">
      <Image
        boxSize={"520px"}
        objectFit="cover"
        src={source}
        alt={altText}
        zIndex={1}
        borderRadius="0px 0px 14px 14px"
      />
      <Center position="relative" height="150px">
        <Image
          src={"logo_small.png"}
          alt="Balad'or"
          position="absolute"
          top="-100"
          boxSize="40px"
          zIndex={2}
        />
        <Flex
          boxShadow="lg"
          position="absolute"
          flexDirection={"column"}
          bg="white"
          pt="25px"
          pb="15px"
          px="20px"
          width="90%"
          borderRadius="14px"
          top={-20}
          border="1px"
          borderColor="gray.200"
        >
          <CustomHeroTitle text={cardTitle} />
          <CustomHeroText text={cardBody} />
        </Flex>
      </Center>
    </Box>
  );
};

export default HeroImage;
