import { Box, BoxProps } from "@chakra-ui/react";
import { scrollBarStyle } from "../util/ScrollBarStyle";

const ScrollBarWrapper = ({ children, ...props }: BoxProps) => (
  <Box
    sx={scrollBarStyle()}
    position="sticky"
    overflow="auto"
    id="window-root"
    {...(props as any)}
  >
    <Box height="100vh">{children}</Box>
  </Box>
);

export default ScrollBarWrapper;
