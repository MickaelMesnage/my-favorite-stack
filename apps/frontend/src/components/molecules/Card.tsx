import { Box, BoxProps } from "@/panda/jsx";

export const Card = (props: BoxProps) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      borderRadius="12px"
      padding={2}
      {...props}
    />
  );
};
