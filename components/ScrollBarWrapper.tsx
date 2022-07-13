import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { scrollBarStyle } from "../util/ScrollBarStyle";

const ScrollBarWrapper = ({ children, ...props }: BoxProps) => {
  const scrollBarColor = useColorModeValue("#DB9B1C", "#2A3243");

  return (
    <Box
      sx={scrollBarStyle({ color: scrollBarColor })}
      position="sticky"
      overflow="auto"
      {...(props as any)}
    >
      <Box height="100vh">{children}</Box>
    </Box>
  );
};

export default ScrollBarWrapper;
