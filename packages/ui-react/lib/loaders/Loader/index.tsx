/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { LoaderProps } from "../../base/types";
import { Cube } from "../Cube";
import { Dots } from "../Dots";
import { Line } from "../Line";

export const Loader = ({ type, text }: LoaderProps) => {
  switch (type) {
    case "cube":
      return <Cube />;
    case "dots":
      return <Dots />;
    case "line":
    default:
      return <Line text={text} />;
  }
};
