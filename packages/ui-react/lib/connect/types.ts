/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import {
  ExtensionAccount,
  ExtensionInterface,
} from "./ExtensionsProvider/types";

/*------------------------------------------------------------
   Imported account types.
 ------------------------------------------------------------*/

export type AccountSource = "extension" | "external" | "ledger" | "vault";

export type ExternalAccountAddedBy = "system" | "user";

export type ImportedAccount =
  | ExtensionAccount
  | ExternalAccount
  | LedgerAccount
  | VaultAccount;

export interface ExternalAccount {
  address: string;
  network: string;
  name: string;
  source: string;
  addedBy: ExternalAccountAddedBy;
}

export interface LedgerAccount {
  address: string;
  network: string;
  name: string;
  source: string;
  index: number;
}

export interface VaultAccount {
  address: string;
  network: string;
  name: string;
  source: string;
  index: number;
}

/*------------------------------------------------------------
   Extension import process types.
 ------------------------------------------------------------*/

export type RawExtensions = Map<string, RawExtensionEnable>;

export type RawExtensionEnable = (name?: string) => Promise<ExtensionInterface>;

export type ExtensionEnableStatus =
  | "valid"
  | "extension_not_found"
  | "enable_invalid";

export type ExtensionEnableResults = Map<string, ExtensionEnableResult>;

export interface ExtensionEnableResult {
  extension?: ExtensionInterface;
  connected: boolean;
  error?: string;
}
