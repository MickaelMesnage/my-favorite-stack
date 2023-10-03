import { RecipeVariantProps, cva } from "@/panda/css";
import { styled } from "@/panda/jsx";

const buttonStyle = cva({
  base: {
    cursor: "pointer",
    paddingX: 6,
    paddingY: 3,
    fontFamily: "acumin",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
    borderRadius: "xl",
    borderColor: "transparent",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "brand.red",
        color: "white",
        _hover: {
          md: {
            bg: "brand.lightSalmon",
          },
        },
      },
      outline: {
        bg: "whiteWithOpacity75",
        color: "brand.red",
        borderRadius: "4px",
        _hover: {
          md: {
            bg: "brand.lightSalmon",
          },
        },
      },
      link: {
        textDecoration: "underline",
        paddingX: 0,
        paddingY: 0,
      },
      unstyled: {
        padding: 0,
      },
    },
    size: {
      fluid: {
        width: "full",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

export const Button = styled("button", buttonStyle);
