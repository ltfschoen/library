/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/buttons/index.css";
import { ButtonCommonProps, ButtonIconProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentBaseWithClassName } from "../../../utils/types";
import { valEmpty, onMouseHandlers, valOr } from "../../../utils";

export type ButtonMonoProps = ComponentBaseWithClassName &
  ButtonIconProps &
  ButtonCommonProps & {
    // button text.
    text: string;
  };

/**
 * @name ButtonText
 * @description Plain button style used within the main interface of dashboards.
 */
export const ButtonText = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  marginLeft,
  marginRight,
  marginX,
  className,
  style,
  text,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonMonoProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={`btn-text${valEmpty(grow, "grow")}${valEmpty(
      marginRight,
      "m-right"
    )}${valEmpty(marginLeft, "m-left")}${valEmpty(marginX, "m-x")}${
      className ? ` ${className}` : ""
    }`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    {iconLeft ? (
      <FontAwesomeIcon
        icon={iconLeft}
        className={valOr(text, "icon-left", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
    {text ? text : null}
    {iconRight ? (
      <FontAwesomeIcon
        icon={iconRight}
        className={valOr(text, "icon-right", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
  </motion.button>
);
