import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"Great Vibes", sans-serif`,
    body: `"Open Sans", sans-serif`,
  },
  colors: {
    accent: {
      light: "#FD4F49",
      main: "#E62720",
    },
  },
});

export default theme;
