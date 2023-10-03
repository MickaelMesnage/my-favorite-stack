"use client";

import { useAuth } from "@/src/components/organisms/Auth/AuthProvider";
import { Signout } from "@/src/components/organisms/Auth/Signout";
import { useClient } from "@/src/hooks/useClient";
import { Box, Container, HStack } from "@/panda/jsx";
import { css, cx } from "@/panda/css";
import Link from "next/link";
import { Component, ComponentProps } from "react";

const LINKS = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/message/list",
    label: "Liste des messages",
  },
  {
    href: "/message/create",
    label: "Créer un message",
  },
];

export type HeaderProps = {
  className?: ComponentProps<"header">["className"];
};

export const Header = ({ className }: HeaderProps) => {
  const isClient = useClient();
  const { isLoggedIn } = useAuth();

  return (
    <header
      className={cx(
        css({
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }),
        className
      )}
    >
      <Container height="full" maxWidth="breakpoint-xl">
        <nav
          className={css({
            height: "full",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          })}
        >
          <HStack alignItems="center" gap={4}>
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </HStack>
          {isClient && (
            <Box>
              {isLoggedIn && <Signout />}
              {!isLoggedIn && <a href={"/auth/signin"}>Se connecter</a>}
            </Box>
          )}
        </nav>
      </Container>
    </header>
  );
};
