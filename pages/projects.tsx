import type { NextPage } from "next";
import { Text, Image, Heading, Box, Flex, Button } from "@chakra-ui/react";
import Watermark from "../components/Watermark";
import Navbar from "../components/Navbar";

interface ProjectCardsProps {
  imageURL: string;
  projectTitle: string;
  projectBody: string;
  githubLink: string;
  deployedLink?: string;
}

const ProjectCards = ({
  imageURL,
  projectTitle,
  projectBody,
  githubLink,
  deployedLink,
}: ProjectCardsProps) => {
  const imgScalingFactor = 0.22;
  return (
    <Flex flexDir="row" w="100%" h="32vh" alignSelf="center" padding="0 10%">
      <Image
        src={imageURL}
        flex="0.1"
        w={1920 * imgScalingFactor}
        h={974 * imgScalingFactor}
        alignSelf="center"
        zIndex="150"
        borderRadius="5"
      />
      <Flex
        flexDir="column"
        gridGap="2em"
        bg="gray.100"
        flex="3"
        ml="-20%"
        zIndex="100"
        borderRadius="5"
        padding="2% 4% 2% 23%"
      >
        <Heading color="#4058C7" fontSize="3xl" fontFamily="Sora">
          {projectTitle}
        </Heading>
        <Text>{projectBody}</Text>
        <Flex flexDir="row" w={deployedLink ? "50%" : "25%"} gridGap="1em">
          <Button
            variant="solid-blue"
            flex="1"
            onClick={() => window.open(githubLink)}
          >
            GITHUB
          </Button>
          {deployedLink ? (
            <Button
              variant="outline-blue"
              flex="1"
              bg="white"
              onClick={() => window.open(deployedLink)}
            >
              DEPLOYED LINK
            </Button>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

const Projects: NextPage = () => {
  const HeadingStyle = {
    fontFamily: "Sora",
    fontSize: "5xl",
  };

  return (
    <Box
      bgImg="./bg-modified.svg"
      w="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Watermark text1="PROJECTS" ml="0%" mt="5%" textAlign="center" />
      <Box position="absolute" zIndex="100" w="100%" h="100vh">
        <Navbar currentPage="Projects" />
        <Flex flexDir="column" gridGap="5em">
          <Flex flexDir="row" gridGap="0.6em" h="5em" ml="30%" mr="25%" mt="3%">
            <Heading
              {...HeadingStyle}
              bgGradient="linear(to-r, #3A59C5, #8D43EA)"
              bgClip="text"
              alignSelf="center"
            >
              SOME OF MY
            </Heading>
            <Box
              as="span"
              color="#3A59C5"
              padding="0.2em 0.5em"
              border="2px solid #3A59C5"
              alignSelf="center"
            >
              <Heading {...HeadingStyle}>PROJECTS</Heading>
            </Box>
          </Flex>
          <Flex flexDir="column" gridGap="3em">
            <ProjectCards
              imageURL="./cndkart-project.jpg"
              projectTitle="CND E-kart"
              projectBody="This is a customised eCommerce application to cater to the needs of the steel and fabrication industry. This is would allow vendors to easily manage and sell their products and accept payments from their clients."
              githubLink="https://github.com/Atechchatterjee/ecommerce"
            />
            <ProjectCards
              imageURL="./mazegenerator-project.jpg"
              projectTitle="Maze Generator"
              projectBody="This is a visualisation of a maze generating algorithm. The UI allows users to click on grid which then triggers the algorithm to start generating a maze using recursive backtracing."
              githubLink="https://github.com/Atechchatterjee/mazegenerator"
            />
            <ProjectCards
              imageURL="./pathfinder-project.jpg"
              projectTitle="Path Finding Visualizer"
              projectBody="This is a visualisation of the popular path-finding algorthms like Dijstra and A*. Given a starting point (red) and a end point(green) it would find the shortest path between the two points."
              githubLink="https://github.com/Atechchatterjee/Path-Finding"
              deployedLink="https://determined-lalande-7e7098.netlify.app"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
