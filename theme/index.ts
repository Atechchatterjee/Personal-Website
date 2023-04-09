import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Button: {
      baseStyle: {
        padding: "1.3em",
        borderRadius: "2",
      },
      variants: {
        "solid-blue": {
          bg: "#3C59C6",
          color: "white",
          fontSize: "sm",
        },
        "outline-blue": {
          border: "1px solid #3C59C6",
          color: "#3C59C6",
          fontSize: "sm",
        },
      },
    },
    Input: {
      field: {
        baseStyle: {
          borderRadius: "0",
        },
      },
    },
  },
});
