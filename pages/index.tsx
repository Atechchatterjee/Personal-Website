import type { NextPage } from "next";
import { Box, Text, Flex, Heading, Button } from "@chakra-ui/react";
import Watermark from "../components/Watermark";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const HeadingGradientBg = {
    bgGradient: "linear(to-r, #3A59C5, #8D43EA, #8D43EA, #8D43EA)",
    bgClip: "text",
    fontSize: "5xl",
    fontFamily: "Sora",
  };

  const downloadResume = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <Box
      bgImg="./bg.svg"
      w="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Watermark text1="DEVELOP" />
      <Box position="absolute" zIndex="100" w="100%" h="100vh">
        <Navbar currentPage="Home" />
        <Flex flexDir="row">
          <Flex flexDir="column" ml="12vw" mt="8%" gridGap="3em" w="35%">
            <Flex flexDir="column" gridGap="1.5em">
              <Heading {...HeadingGradientBg} lineHeight="1.5">
                DESIGN AND DEVELOP YOUR NEEDS.
              </Heading>
            </Flex>
            <Flex flexDir="column" gridGap="2em" fontSize="lg" w="90%">
              <Text fontWeight="semibold" fontSize="xl">
                Greetings!{" "}
                <Text
                  as="span"
                  bgGradient="linear(to-r, #3A59C5, #8D43EA)"
                  bgClip="text"
                  fontWeight="extrabold"
                >
                  ANISH CHATTERJEE
                </Text>{" "}
                here.
              </Text>
              <Text>
                I am a full stack web developer who loves to tackle hard
                problems head on and comes up with creative solution to fix it.
              </Text>
            </Flex>
            <Flex flexDir="row" gridGap="1em" w="80%" mt="5%">
              <Button
                variant="solid-blue"
                flex="1"
                onClick={() => window.location.assign("/projects")}
              >
                CHECK OUT MY WORK
              </Button>
              <Button
                variant="outline-blue"
                flex="1"
                bg="white"
                onClick={downloadResume}
              >
                MY PORTFOLIO
              </Button>
            </Flex>
          </Flex>
          <Box
            bgImg="./Home-illus.svg"
            w="55em"
            h="44em"
            bgSize="contain"
            bgRepeat="no-repeat"
            mt="3%"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
