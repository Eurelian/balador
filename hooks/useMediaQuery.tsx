import React from "react";
import { useMediaQuery } from "@chakra-ui/react";

const useMQuery = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return { isMobile };
};
export default useMQuery;
