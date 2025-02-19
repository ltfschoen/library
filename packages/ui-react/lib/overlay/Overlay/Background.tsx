/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { ModalOverlay } from "../../base/modal/ModalOverlay";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useOverlay } from "../OverlayProvider/useOverlay";
import type { CanvasStatus } from "../OverlayProvider/types";

export const Background = ({
  externalOverlayStatus,
}: {
  externalOverlayStatus?: CanvasStatus;
}) => {
  const controls = useAnimation();
  const {
    modal: { status: modalStatus },
    canvas: { status: canvasStatus },
  } = useOverlay();

  let { openOverlayInstances } = useOverlay();
  if (externalOverlayStatus === "open") {
    openOverlayInstances++;
  }

  const onIn = async () => await controls.start("visible");

  const onOut = async () => await controls.start("hidden");

  useEffect(() => {
    if (openOverlayInstances > 0) {
      onIn();
    }
    if (openOverlayInstances === 0) {
      onOut();
    }
  }, [openOverlayInstances]);

  return (
    <>
      {modalStatus === "closed" &&
      canvasStatus === "closed" &&
      externalOverlayStatus === "closed" ? null : (
        <ModalOverlay
          blur={
            canvasStatus === "open" || externalOverlayStatus === "open"
              ? "1.4rem"
              : "0.4rem"
          }
          initial={{
            opacity: 0,
          }}
          animate={controls}
          transition={{
            duration: 0.15,
          }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        />
      )}
    </>
  );
};
