import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "../styles/globals.css";
import ScrollBarWrapper from "../components/ScrollBarWrapper";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ScrollBarWrapper>
        <Component {...pageProps} />
      </ScrollBarWrapper>
    </ChakraProvider>
  );
};

export default MyApp;
