import type { Brazil } from "./brazil";
import type { UtilsExtendedFunctions } from "./core";
import type { Dialog } from "./dialog";
import type { Doc } from "./doc";
import type { Form } from "./form";
import type { Table } from "./table";

export interface Utils extends UtilsExtendedFunctions {
  brazil: Brazil;
  dialog: Dialog;
  doc: Doc;
  form: Form;
  table: Table;
}