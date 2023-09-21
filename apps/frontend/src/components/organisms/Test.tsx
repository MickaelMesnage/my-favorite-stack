"use client";

import { useTranslations } from "next-intl";

export const Test = () => {
  const t = useTranslations();

  return (
    <>
      <h1>{t("test")}</h1>
      <h2>{t("test2")}</h2>
      <p>{t("test3")}</p>
      <p>{t("test4")}</p>
    </>
  );
};
