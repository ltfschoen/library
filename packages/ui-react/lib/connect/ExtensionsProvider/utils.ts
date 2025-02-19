/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import {
  GetSnapsResponse,
  hasMetaMask,
} from "@chainsafe/metamask-polkadot-adapter/src/utils";
import { AnyJson } from "../../utils/types";
import { SnapRpcMethodRequest } from "@chainsafe/metamask-polkadot-types";
import { withTimeout } from "@polkadot-ui/utils";

// Workaround for current `ethereum` snap types. See
// https://github.com/ChainSafe/metamask-snap-polkadot/blob/e0f3d4fc0be7366c62211e29d3a276e4fab5669e/packages/adapter/src/types.ts#L40
// for full type.
declare global {
  interface Window {
    injectedWeb3?: AnyJson;
    ethereum: {
      isMetaMask: boolean;
      send: (
        request: SnapRpcMethodRequest | { method: string; params?: never[] }
      ) => Promise<unknown>;
      on: (eventName: unknown, callback: unknown) => unknown;
      request: <T>(
        request: SnapRpcMethodRequest | { method: string; params?: AnyJson }
      ) => Promise<T>;
    };
  }
}

// Checks if snaps are supported. Note that other extensions may inject `window.ethereum`, which may
// break the request. We wrap the request in a timeout to ensure it doesn't hang the extension
// discovery process.
const getWalletSnaps = async (): Promise<GetSnapsResponse> => {
  const ethRequest = window?.ethereum?.request ? true : false;
  if (ethRequest) {
    const response = await withTimeout(
      200,
      window.ethereum.request({ method: "wallet_getSnaps" })
    );
    return response as Promise<GetSnapsResponse>;
  }
  return;
};

// Determines if Metamask Polkadot Snap is available and supported.
export const polkadotSnapAvailable = async (): Promise<boolean> => {
  if (!hasMetaMask()) {
    return false;
  }

  try {
    await getWalletSnaps();
    return true;
  } catch (e) {
    return false;
  }
};
