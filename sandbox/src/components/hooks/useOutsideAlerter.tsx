/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { AnyFunction } from "@packages/ui-react/lib/utils/types";
import { AnyObject } from "@packages/utils/lib/types";
import { useEffect } from "react";

/*
 * A hook that alerts clicks outside of the passed ref.
 */
export const useOutsideAlerter = (
  ref: AnyObject,
  callback: AnyFunction,
  ignore = []
) => {
  useEffect(() => {
    const handleClickOutside = (event: AnyObject) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const invalid = ignore.find((i) => event.target.classList.contains(i));
        if (invalid === undefined) {
          callback();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
