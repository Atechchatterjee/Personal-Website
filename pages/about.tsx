import type { NextPage } from "next";
import { Box, Text, Flex, Heading, Button } from "@chakra-ui/react";
import Watermark from "../components/Watermark";
import Navbar from "../components/Navbar";

const About: NextPage = () => {
  const HeadingStyle = {
    fontFamily: "Sora",
    fontSize: "5xl",
  };
  return (
    <Box
      bgImg="./bg.svg"
      w="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Watermark text1="ABOUT ME" ml="-5%" mt="5%" />
      <Box position="absolute" zIndex="100" w="100%" h="100vh">
        <Navbar currentPage="About" />
        <Flex flexDir="row" gridGap="3em">
          <Flex flexDir="column" ml="12vw" w="36%" gridGap="4em" mt="6%">
            <Flex flexDir="row" gridGap="0.6em" h="5em">
              <Heading
                {...HeadingStyle}
                bgGradient="linear(to-r, #3A59C5, #8D43EA)"
                bgClip="text"
                alignSelf="center"
              >
                ABOUT
              </Heading>
              <Box
                as="span"
                color="#3A59C5"
                padding="0.2em 0.5em"
                border="2px solid #3A59C5"
                alignSelf="center"
              >
                <Heading {...HeadingStyle}>ME</Heading>
              </Box>
            </Flex>
            <Flex flexDir="column" gridGap="2em" fontSize="xl">
              <Text flex="1">
                I am currently persuing my undergrad in Computer Science and
                Engineering. I have passion for web development and enjoy
                working with both frontend ui and backend. I am also currently
                exploring fields such as machine learning and mobile
                development.
              </Text>
              <Text flex="1">
                I am a big time advocate of visual learning and love making
                softwares to visualize algorithms to make the process of
                learning them fun and interesting.
              </Text>
            </Flex>
          </Flex>
          <Box
            bgImg="./About-illus.svg"
            w="55em"
            h="44em"
            bgSize="contain"
            bgRepeat="no-repeat"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
