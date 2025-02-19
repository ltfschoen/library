/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { faPenToSquare, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty } from "../../../utils";
import { TxProps } from "../../types";
import "@polkadot-ui/core/css/base/structure/Tx/index.css";

/**
 * @name Tx
 * @summary A wrapper to handle transaction submission.
 */
export const Tx = ({
  margin,
  label,
  name,
  notEnoughFunds,
  dangerMessage,
  SignerComponent,
  displayFor = "default",
}: TxProps) => (
  <div className={`core-tx${valEmpty(margin, "margin")}`}>
    <div className={`inner${valEmpty(displayFor === "canvas", "canvas")}`}>
      <p className="sign">
        <span className="badge">
          <FontAwesomeIcon icon={faPenToSquare} className="icon" />
          {label}
        </span>
        {name}
        {notEnoughFunds && (
          <span className="not-enough">
            / &nbsp;
            <FontAwesomeIcon
              icon={faWarning}
              className="danger"
              transform="shrink-1"
            />{" "}
            <span className="danger">{dangerMessage}</span>
          </span>
        )}
      </p>
      <section>{SignerComponent}</section>
    </div>
  </div>
);
