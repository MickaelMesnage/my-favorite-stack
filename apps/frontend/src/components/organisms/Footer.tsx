import { Container, Flex } from "@/panda/jsx";
import { css } from "@/panda/css";

export const Footer = () => {
  return (
    <footer
      className={css({
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        height: 16,
        width: "full",
      })}
    >
      <Container maxWidth="breakpoint-xl" height="full">
        <Flex alignItems="center" height="full">
          Footer en cours de développement
        </Flex>
      </Container>
    </footer>
  );
};
