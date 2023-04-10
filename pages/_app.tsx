import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "../theme";
import ScrollBarWrapper from "../components/ScrollbarWrapper";

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
