/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { Button } from "../../buttons/Button";
import { ComponentBase } from "../../../utils/types";
import { motion } from "framer-motion";
import { FunctionComponent, SVGProps } from "react";
import "@polkadot-ui/core/css/base/hardware/HardwareStatusBar/index.css";

export type HardwareStatusBarProps = ComponentBase & {
  // whether to animate in the status bar.
  show?: boolean;
  // help key and handler related to current status.
  help?: {
    // help key to display.
    helpKey: string;
    // handle help click.
    handleHelp: (key: string) => void;
  };
  // whether import process is in progress.
  inProgress: boolean;
  // text to display.
  text: string;
  // icon to display.
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  // handle cancel import.
  handleCancel?: () => void;
  // handle finish import.
  handleDone?: () => void;
  // required component translations.
  t: {
    tDone: string;
    tCancel: string;
  };
};

/**
 * @name HardwareStatusBar
 * @description A status bar for hardware wallet import process.
 */
export const HardwareStatusBar = ({
  handleCancel,
  handleDone,
  show,
  help,
  Icon,
  inProgress,
  style,
  t: { tDone, tCancel },
  text,
}: HardwareStatusBarProps) => {
  const { helpKey, handleHelp } = help || {};

  return (
    <motion.div
      style={style}
      className="hardware-status-bar"
      initial="hidden"
      animate={show ? "show" : undefined}
      variants={{
        hidden: { bottom: -50 },
        show: {
          bottom: 0,
          transition: {
            staggerChildren: 0.01,
          },
        },
      }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.4,
      }}
    >
      <div className="inner">
        <section>
          <div style={{ width: "3rem", height: "3rem" }} className="icon">
            <Icon />
          </div>
          <div className="text">
            <h3>
              {text}
              {help && (
                <Button
                  type="help"
                  marginLeft
                  onClick={() => {
                    if (typeof handleHelp === "function") {
                      handleHelp(helpKey);
                    }
                  }}
                  background="secondary"
                />
              )}
            </h3>
          </div>
        </section>
        <section>
          {inProgress ? (
            <Button
              type="monoInvert"
              text={tCancel}
              onClick={() =>
                typeof handleCancel === "function" && handleCancel()
              }
            />
          ) : (
            <Button
              type="primaryInvert"
              text={tDone}
              onClick={() => {
                if (typeof handleDone === "function") {
                  handleDone();
                }
              }}
            />
          )}
        </section>
      </div>
    </motion.div>
  );
};
