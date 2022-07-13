import type { NextPage } from "next";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SocialHandles from "../components/SocialHandles";
import ProfilePicture from "../components/ProfilePicture";
import IntroContainer from "../components/IntroContainer";
import AboutMe from "../components/AboutMe";
import ModeSwitchBtn from "../components/ModeSwitchBtn";
import Technologies from "../components/Technologies";

const Home: NextPage = () => {
  const bgImage = useColorModeValue(
    "/light-theme-bg.svg",
    "/dark-theme-bg.svg"
  );

  return (
    <Box>
      <Box
        bgImage={bgImage}
        w="100%"
        h="85vh"
        bgSize="cover"
        bgRepeat="no-repeat"
        zIndex="1"
      >
        <Flex
          flexDir="row"
          gridGap="5%"
          pos="absolute"
          ml="15%"
          mt="3%"
          flexWrap="wrap"
        >
          <Flex flexDir="column" gridGap="2rem" w="20%">
            <ProfilePicture />
            <SocialHandles />
          </Flex>
          <IntroContainer ml="10%" />
        </Flex>
        <ModeSwitchBtn position="absolute" right="1.5%" top="2%" />
      </Box>
      <AboutMe />
      <Technologies />
    </Box>
  );
};

export default Home;
