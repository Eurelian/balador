import React from "react";
import { Image } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import Menu from "./Menu";
import useMQuery from "../hooks/useMediaQuery";
type Props = {};

const NavBar = (props: Props) => {
  const { isMobile } = useMQuery();
  return (
    <Flex
      paddingX={15}
      paddingY={15}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box boxSize="75px" zIndex={5}>
        <Image
          borderRadius="14px"
          src="logo_big.png"
          alt="Logo Balador a la carte"
        />
      </Box>
      {isMobile ? <Menu /> : null}
    </Flex>
  );
};

export default NavBar;
