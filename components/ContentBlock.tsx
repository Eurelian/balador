import { Flex, Text, Image, Heading, Box, Divider } from "@chakra-ui/react";
import useMQuery from "../hooks/useMediaQuery";
import ButtonMain from "./ButtonMain";

type ContentBlockProps = {
  title: string;
  description: string;
  image: string;
  index?: number;
  hasButton?: boolean;
  buttonAction?: () => void;
  buttonText?: string;
};

const ContentBlock = ({
  title,
  description,
  image,
  index,
  hasButton,
  buttonAction = () => null,
  buttonText = "",
}: ContentBlockProps) => {
  const { isMobile } = useMQuery();
  const isLeft = (index && index % 2 === 0) || index === 0;
  console.log(isLeft);
  return (
    <>
      <Flex
        flexDirection={"column"}
        mt="50px"
        py="20px"
        overflowY={"hidden"}
        height="100%"
        maxHeight="550px"
      >
        {isMobile && (
          <Heading width={"100%"} textAlign="center">
            {title}
          </Heading>
        )}
        <Flex
          position="relative"
          flexDirection={isMobile ? "column" : "row"}
          height="100%"
        >
          <Image
            src={image}
            alt={title}
            width={isMobile ? "100%" : "40%"}
            objectFit="cover"
            minHeight="250px"
            borderRadius="14px"
            order={isMobile ? 1 : isLeft ? 1 : 2}
          />
          <Flex
            flexDir={"column"}
            py={"20px"}
            px={"40px"}
            height="100%"
            justify={"center"}
            order={isMobile ? 2 : isLeft ? 2 : 1}
          >
            <Heading width={"100%"} mb="25px" fontSize="5xl">
              {title}
            </Heading>
            <Text>{description}</Text>
            {hasButton && (
              <Box order={3} mt="50px">
                <ButtonMain text={buttonText} onClick={buttonAction} />
              </Box>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Divider mt="25px" />
    </>
  );
};
export default ContentBlock;
