import type { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";
import type { Growatt } from "./growatt";
import type { Utils } from "./utils";
import type { Ui } from "./ui";
import type { Checklist } from "./checklist";
import type { Db } from "./utils/db";
import type { Text } from "./utils/text";
import type { Metadata } from "./metadata";

declare global {
  const agt: {
    setup: GeneralSetup;
    src_frm: FrappeForm | undefined;
    utils: Utils;
    growatt: Growatt;
    ui: Ui;
    db: Db;
    text: Text;
    checklist: Checklist;
    metadata: Metadata;
  };
}

type GeneralSetup = {
  /**
   * Sets up the custom integrations for the source form it is used in.
   * It will setup once:
   * - Corrections tracker
   * - Checklist tables
   * It will setup every time the event is triggered:
   * - before_workflow_action: Workflow validate
   * - before_workflow_action: Workflow preaction
   * - refresh: Load history field.
   * - after_save: Workflow validate ("Save")
   * - onload: Workflow validate ("Load")
   */
  run: () => Promise<void>;
}