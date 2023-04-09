import { Box, BoxProps, Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface WatermarkProps extends BoxProps {
  text1: string;
  text2?: string;
}

const Watermark = ({ text1, text2, ...props }: WatermarkProps) => {
  const HeaderStyles = {
    color: "#F7F7F7",
    fontFamily: "Sora",
    fontWeight: "bold",
    fontSize: "15em",
  };
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDir="column"
      gridGap="0.3em"
      position="absolute"
      alignItems="center"
      // zIndex="-1"
    >
      <Box ml="-14%" mt="7%" {...props}>
        <Heading {...HeaderStyles}>{text1}</Heading>
        {text2 ? <Heading {...HeaderStyles}>{text2}</Heading> : <></>}
      </Box>
    </Flex>
  );
};

export default Watermark;
