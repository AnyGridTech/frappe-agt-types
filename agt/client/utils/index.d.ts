import type { Brazil } from "./brazil";
import type { UtilsExtendedFunctions } from "./core";
import type { Dialog } from "./dialog";
import type { Doc } from "./doc";
import type { Form } from "./form";
import type { Table } from "./table";
import { Db } from "@anygridtech/frappe-agt-types/agt/client/utils/db";
import { Core } from "@anygridtech/frappe-types/client/frappe/core";

export interface Utils extends UtilsExtendedFunctions {
  core: Core;
  brazil: Brazil;
  dialog: Dialog;
  doc: Doc;
  form: Form;
  table: Table;
  text: Text;
  db: Db;
}