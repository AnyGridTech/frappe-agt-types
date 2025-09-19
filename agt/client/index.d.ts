import type { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";
import type { ClientGrowatt } from "./growatt";
import type { ClientUtils } from "./utils";
import type { ClientUi } from "./ui";
import type { ClientChecklist } from "./checklist";
import type { ClientDb } from "./utils/db";
import type { ClientUtilsText } from "./utils/text";
import type { ClientDoctypeNamespace } from "./doctype_namespace";

declare global {
  const agt: {
    setup: GeneralSetup;
    src_frm: FrappeForm | undefined;
    utils: ClientUtils;
    growatt: ClientGrowatt;
    ui: ClientUi;
    db: ClientDb;
    text: ClientUtilsText;
    checklist: ClientChecklist;
    doctype_namespace: ClientDoctypeNamespace;
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