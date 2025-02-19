/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { CSSProperties } from "react";
import { valEmpty } from "../../../utils";
import { SideProps } from "../../types";
import "@polkadot-ui/core/css/base/structure/Side/index.css";

/**
 * @name Side
 * @summary An element that houses the side menu and transitions to a toggle-able fixed overlay
 * on smaller screens.
 * @summary Handles maximised and minimised transitions.
 */
export const Side = ({
  children,
  style,
  open,
  minimised,
  width = "20rem",
}: SideProps) => {
  const vars = { "--core-side-width": width } as CSSProperties;

  return (
    <div
      style={{ ...vars, ...style }}
      className={`core-side${valEmpty(!open, "hidden")}${valEmpty(
        minimised,
        "minimised"
      )}`}
    >
      {children}
    </div>
  );
};
