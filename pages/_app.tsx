import "../styles/globals.css";
import "swiper/css/bundle";

import "@fontsource/great-vibes";
import "@fontsource/open-sans";
import type { AppProps } from "next/app";
import { MenuProvider } from "../lib/context";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MenuProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuProvider>
    </ChakraProvider>
  );
}

export default MyApp;
