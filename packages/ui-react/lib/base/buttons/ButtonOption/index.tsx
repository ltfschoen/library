/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@polkadot-ui/core/css/base/buttons/index.css";
import { ButtonCommonProps } from "../types";
import { ComponentBaseWithClassName } from "../../../utils/types";
import { valEmpty, onMouseHandlers } from "../../../utils";

export type ButtonOptionProps = ComponentBaseWithClassName &
  ButtonCommonProps & {
    // button content including icon and html styling.
    content?: boolean;
  };

/**
 * @name ButtonOption
 * @description Option button for different action.
 */
export const ButtonOption = ({
  children,
  className,
  style,
  disabled,
  content,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
}: ButtonOptionProps) => (
  <button
    className={`btn-option${valEmpty(content, "content")}${
      className ? ` ${className}` : ""
    }`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    {children}
    <div>
      <FontAwesomeIcon transform="shrink-2" icon={faChevronRight} />
    </div>
  </button>
);
