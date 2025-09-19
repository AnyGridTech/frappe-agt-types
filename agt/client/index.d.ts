import type { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";
import type { ClientGrowatt } from "./growatt";
import type { ClientUtils } from "./utils";
import type { ClientUi } from "./ui";
import type { ClientChecklist } from "./checklist";
import type { ClientDb } from "./utils/db";
import type { ClientUtilsText } from "./utils/text";

declare global {
  const agt: {
    src_frm: FrappeForm | undefined;
    utils: ClientUtils;
    growatt: ClientGrowatt;
    ui: ClientUi;
    db: ClientDb;
    text: ClientUtilsText;
    checklist: ClientChecklist;
  };
}