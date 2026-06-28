import { CSSProperties } from "react";

export type Identifiable = {
  id: number | string;
};

export type CSSPropertiesWithVariables = CSSProperties & {
  [key: `--${string}`]: string | number;
};
