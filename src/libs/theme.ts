import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});
