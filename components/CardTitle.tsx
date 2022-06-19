import { Heading, Text } from "@chakra-ui/react";

type Props = { text: string };

const CardTitle = ({ text }: Props) => {
  return <Heading fontSize="36px">{text}</Heading>;
};

export default CardTitle;
