/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

// ----------------------------
// Package scope to publish to.
// ----------------------------
export const PACKAGE_SCOPE = "polkadot-ui";

// ----------------------------
// Package build output folder.
// ----------------------------
export const PACKAGE_OUTPUT = "dist";

// ----------------------------------------------
// Files that are required to exist in a package.
// ----------------------------------------------
export const PACKAGE_REQUIRED_FILES = [
  "index.yml",
  "lib",
  "package.json",
  "README.md",
];

// --------------------------------------------------------------------
// Scripts that are required to exist in a package's package.json file.
// --------------------------------------------------------------------
export const PACKAGE_REQUIRED_SCRIPTS = ["build:mock", "build", "clear"];

// --------------------------------------------------------------
// Required package.json properties to copy to the package build.
// --------------------------------------------------------------
export const PACKAGE_REQUIRED_JSON_KEYS = [
  "license",
  "version",
  "keywords",
  "bugs",
  "homepage",
  "description",
  "dependencies",
  "peerDependencies",
];
