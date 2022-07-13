import { Box, Flex, Image, BoxProps } from "@chakra-ui/react";
import React from "react";

const GITHUB_URL = "https://github.com/Atechchatterjee";
const LINKEDIN_URL = "https://www.linkedin.com/in/chatterjee-anish/";

const SocialHandles = ({ ...props }: BoxProps) => (
  <Box
    alignSelf="center"
    borderRadius="full"
    w="50%"
    bg="rgba(255,255,255, 0.6)"
    backdropFilter="blur(10px)"
    padding="5% 10%"
    {...props}
  >
    <Flex flexDir="row" gridGap="30%">
      <Image
        src="/github-icon.svg"
        w="40%"
        _hover={{ opacity: "0.8", cursor: "pointer" }}
        onClick={() => window.open(GITHUB_URL, "_blank")}
        transition="all ease-in-out 0.2s"
      />
      <Image
        src="/linkedin-icon.svg"
        w="40%"
        _hover={{ opacity: "0.8", cursor: "pointer" }}
        onClick={() => window.open(LINKEDIN_URL, "_blank")}
        transition="all ease-in-out 0.2s"
      />
    </Flex>
  </Box>
);

export default SocialHandles;
