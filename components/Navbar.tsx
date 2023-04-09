import React from "react";
import { Box, Flex, Link, LinkProps } from "@chakra-ui/react";

const PAGES: { text: string; link: string }[] = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "TechStack", link: "/techstack" },
  { text: "Contact", link: "/contact" },
];

const pages: string[] = PAGES.map((page) => page.text);
type PagePropType = {
  currentPage: typeof pages[number];
};

const Navbar = ({ currentPage }: PagePropType) => {
  const linkStyles: LinkProps = {
    textUnderlineOffset: "5px",
  };

  const activeStyle: LinkProps = {
    fontWeight: "extrabold",
  };

  return (
    <Flex
      flexDir="row"
      w="100%"
      h="6em"
      zIndex="2"
      padding="1% 1% 1% 0"
      alignSelf="center"
    >
      <Box w="12vw" />
      <Box
        bgImg="./Anish-Logo.svg"
        bgRepeat="no-repeat"
        w="240px"
        h="42px"
        alignSelf="center"
        bgSize="80%"
      />
      <Box w="25%" />
      <Flex
        flexDir="row"
        gridGap="3em"
        alignSelf="center"
        color="#17256D"
        fontWeight="semibold"
      >
        {PAGES.map((page) => (
          <Link
            {...(currentPage === page.text
              ? { ...activeStyle, ...linkStyles }
              : linkStyles)}
            href={page.link}
          >
            {page.text}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
