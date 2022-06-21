import React from "react";
import {
  Center,
  Image,
  Text,
  Box,
  Flex,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import Menu from "./Menu";
import NextLink from "next/link";
import useMQuery from "../hooks/useMediaQuery";
import { useRouter } from "next/router";
import ButtonMain from "./ButtonMain";
type Props = {};

const NavLinks = [
  {
    title: "Meniu",
    link: "/menu",
  },
  {
    title: "Locatie",
    link: "/location",
  },
  {
    title: "Povestea Noastra",
    link: "/about",
  },
];

const CustomLink = ({ text, url }: { text: string; url: string }) => {
  const router = useRouter();
  return (
    <NextLink href={url} passHref>
      <Link ml="25px">
        <Text fontWeight={router.pathname === url ? 600 : 400}>{text}</Text>
      </Link>
    </NextLink>
  );
};

const NavBar = (props: Props) => {
  const { isMobile } = useMQuery();
  return (
    <Center
      w="100%"
      bg="whiteAlpha.800"
      position="sticky"
      top="0"
      zIndex={5}
      paddingX={isMobile ? "15px" : "0px"}
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <Flex
        w="100%"
        paddingY={15}
        justifyContent="space-between"
        alignItems="center"
      >
        <LinkBox boxSize="75px" zIndex={5}>
          <NextLink passHref href="/">
            <LinkOverlay>
              <Image
                borderRadius="14px"
                src="logo_big.png"
                alt="Logo Balador a la carte"
              />
            </LinkOverlay>
          </NextLink>
        </LinkBox>
        {isMobile ? (
          <>
            {" "}
            <ButtonMain
              text={"Rezervari"}
              onClick={() => alert("Rezervare!")}
            />{" "}
            <Menu />
          </>
        ) : (
          <>
            <Flex>
              {NavLinks.map((item) => (
                <CustomLink key={item.link} text={item.title} url={item.link} />
              ))}
            </Flex>
            <ButtonMain
              text={"Rezervari"}
              onClick={() => alert("Rezervare!")}
            />
          </>
        )}
      </Flex>
    </Center>
  );
};

export default NavBar;
