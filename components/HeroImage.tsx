import React from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import CardTitle from "./CardTitle";
import useMQuery from "../hooks/useMediaQuery";
type Props = {
  source: string;
  altText: string;
  cardTitle: string;
  cardBody: string;
  cardMeta?: string;
};

const CustomHeroMeta = ({ text = "" }: { text: string }) => {
  const { isMobile } = useMQuery();

  if (isMobile) {
    return null;
  }

  return (
    <Text fontSize="md" fontWeight={"bold"} color="accent.main">
      {text}
    </Text>
  );
};

const CustomHeroTitle = ({ text }: { text: string }) => {
  const { isMobile } = useMQuery();
  return (
    <Text
      fontSize={isMobile ? "2xl" : "8xl"}
      fontWeight={"600"}
      color="#0e0e0e"
      lineHeight={isMobile ? "1.5" : "1.1"}
    >
      {text}
    </Text>
  );
};
const CustomHeroText = ({ text }: { text: string }) => {
  const { isMobile } = useMQuery();
  return (
    <Text
      fontSize={isMobile ? "md" : "lg"}
      fontWeight={"400"}
      color="gray.600"
      mt={"20px"}
    >
      {text}
    </Text>
  );
};

const HeroImage = ({
  source,
  altText,
  cardTitle,
  cardBody,
  cardMeta = "",
}: Props) => {
  const { isMobile } = useMQuery();
  return (
    <Flex height="550px">
      {/* <Image
        src={"logo_small.png"}
        alt="Balad'or"
        position="absolute"
        top="-100"
        boxSize="40px"
        zIndex={2}
      /> */}
      <Flex
        position={isMobile ? "absolute" : "relative"}
        bottom={0}
        background={isMobile ? "whiteAlpha.900" : "none"}
        py={isMobile ? "20px" : "0px"}
        flexDirection={"column"}
        justify="center"
        width="100%"
        borderRadius="14px"
        height={isMobile ? "auto" : "100%"}
        px="15px"
      >
        <CustomHeroMeta text={cardMeta} />
        <CustomHeroTitle text={cardTitle} />
        <CustomHeroText text={cardBody} />
      </Flex>
      <Box w="100%">
        <Image
          width="100%"
          height="100%"
          objectFit={"cover"}
          src={source}
          alt={altText}
          zIndex={1}
          borderRadius="14px 14px 14px 14px"
        />
      </Box>
    </Flex>
  );
};

export default HeroImage;
