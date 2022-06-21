import React from "react";
import { Button } from "@chakra-ui/react";
type MainButtonProps = { text: string; onClick: () => void };

const ButtonMain = ({ text, onClick }: MainButtonProps) => {
  return (
    <Button
      onClick={onClick}
      bg="black"
      color="white"
      _hover={{ bg: "accent.main" }}
      _focus={{ bg: "blackAlpha.900" }}
    >
      {text}
    </Button>
  );
};

export default ButtonMain;
