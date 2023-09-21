"use client";

import { useTranslations } from "next-intl";

export const Test = () => {
  const t = useTranslations();

  return <div>{t("test")}</div>;
};
