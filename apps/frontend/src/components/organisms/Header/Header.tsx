"use client";

import { useAuth } from "@/components/organisms/Auth/AuthProvider";
import styles from "./Header.module.css";
import { Signout } from "@/components/organisms/Auth/Signout";
import { useClient } from "@/hooks/useClient";

export const Header = () => {
  const isClient = useClient();
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav className={styles.container}>
        <a href={"/"}>Accueil</a>
        <a href={"/message/list"}>Liste des messages</a>
        <a href={"/message/create"}>Créer un message</a>
        {isClient && (
          <div>
            {isLoggedIn && <Signout />}
            {!isLoggedIn && (
              <>
                <a href={"/auth/signup"}>S&apos;inscrire</a>
                <a href={"/auth/signin"}>Se connecter</a>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
