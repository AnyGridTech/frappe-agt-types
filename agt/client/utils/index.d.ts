import type { ClientUtilsBrazil } from "./brazil";
import type { ClientUtilsExtendedFunctions } from "./core";
import type { ClientUtilsDialog } from "./dialog";
import type { ClientUtilsDoc } from "./doc";
import type { ClientUtilsForm } from "./form";
import type { ClientUtilsTable } from "./table";

export interface ClientUtils extends ClientUtilsExtendedFunctions {
  brazil: ClientUtilsBrazil;
  dialog: ClientUtilsDialog;
  doc: ClientUtilsDoc;
  form: ClientUtilsForm;
  table: ClientUtilsTable;
}