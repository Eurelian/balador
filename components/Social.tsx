import React from "react";
import NextLink from "next/link";
import { Center, Link, Icon } from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

type Props = {};

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookSquare,
    link: "https://www.facebook.com/baladoralacarte/",
  },
  {
    name: "Instagram",
    icon: FaInstagramSquare,
    link: "https://www.instagram.com/baladoralacarte/",
  },
];

const Social = (props: Props) => {
  return (
    <>
      {socialLinks.map((item) => (
        <NextLink key={item.name} href={item.link} passHref>
          <Link>
            <Icon
              as={item.icon}
              color="white"
              mx="10px"
              mt="25px"
              w={12}
              h={12}
            />
          </Link>
        </NextLink>
      ))}
    </>
  );
};

export default Social;
