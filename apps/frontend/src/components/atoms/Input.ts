import { cva } from "@/panda/css";
import { styled } from "@/panda/jsx";

const inputStyle = cva({
  base: {
    width: "full",
    height: 12,
    bg: "white",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "brand.lightSalmon",
    borderRadius: "12px",
    px: "3",
    py: "4",
    fontWeight: "bold",
    _focus: {
      outline: "none",
      borderWidth: "2px",
      borderColor: "brand.red",
      bg: "brand.flesh",
    },
    _hover: {
      borderColor: "brand.red",
    },
    _placeholder: {
      color: "brand.silver",
    },
  },
});

export const Input = styled("input", inputStyle);
