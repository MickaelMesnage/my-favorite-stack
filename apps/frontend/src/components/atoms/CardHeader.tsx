import { css } from "@/panda/css";
import { HStack } from "@/panda/jsx";

export type CardHeaderProps = {
  label: string;
};

export const CardHeader = ({ label }: CardHeaderProps) => {
  return (
    <HStack alignItems="center" padding={2} borderBottom="solid 1px gray">
      <h3 className={css({ textStyle: "h3" })}>{label}</h3>
    </HStack>
  );
};
