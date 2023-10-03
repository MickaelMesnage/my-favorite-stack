import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontWeight: "700",
      fontSize: "42px",
      fontStyle: "normal",
      lineHeight: "normal",
      textTransform: "uppercase",
    },
  },
  h2: {
    value: {
      fontWeight: "700",
      fontSize: "30px",
      fontStyle: "normal",
      lineHeight: "normal",
      textTransform: "uppercase",
    },
  },
  h3: {
    value: {
      fontWeight: "700",
      fontSize: "24px",
      fontStyle: "normal",
      lineHeight: "normal",
      textTransform: "uppercase",
    },
  },
  body: {
    value: {
      fontWeight: "400",
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "24px",
    },
  },
});
