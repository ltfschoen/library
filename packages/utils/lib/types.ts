/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyJson = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = any;

export enum EvalMessages {
  GIBBERISH = "Input is not correct. Use numbers, floats or expression (e.g. 1k, 1.3m)",
  ZERO = "You cannot send 0 funds",
  SUCCESS = "",
  SYMBOL_ERROR = "Provided symbol is not correct",
  GENERAL_ERROR = "Check your input. Something went wrong",
}
