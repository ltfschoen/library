/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/modal/CanvasContainer/index.css";

/**
 * @name CanvasContainer
 * @summary Modal background wrapper with a thick blurred backround, suitable for text content to
 * overlay it.
 */
export const CanvasContainer = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-canvas" {...rest}>
    {children}
  </motion.div>
);
