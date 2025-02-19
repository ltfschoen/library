/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { useEffect, useRef } from "react";
import { AnyFunction, AnyJson } from "../../../utils/types";

export const useEffectIgnoreInitial = (fn: AnyFunction, deps: AnyJson[]) => {
  const isInitial = useRef<boolean>(true);
  useEffect(
    () => {
      if (!isInitial.current) {
        fn();
      }
      isInitial.current = false;
    },
    deps ? [...deps] : undefined
  );
};
