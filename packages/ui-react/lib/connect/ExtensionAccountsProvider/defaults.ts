/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function,  no-unused-vars */

import { ExtensionAccountsContextInterface } from "./types";

export const defaultExtensionAccountsContext: ExtensionAccountsContextInterface =
  {
    connectExtensionAccounts: () => Promise.resolve(false),
    extensionAccountsSynced: "unsynced",
    extensionAccounts: [],
  };

export const defaultHandleImportExtension = {
  newAccounts: [],
  meta: {
    accountsToRemove: [],
    removedActiveAccount: null,
  },
};
