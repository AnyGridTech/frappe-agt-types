import type { Brazil } from "./brazil";
import type { UtilsExtendedFunctions } from "./core";
import type { Dialog } from "./dialog";
import type { Doc } from "./doc";
import type { Form } from "./form";
import type { Table } from "./table";
import type { Text } from "./text";
import type { Db } from "./db";

export interface Utils extends UtilsExtendedFunctions {
  brazil: Brazil;
  dialog: Dialog;
  doc: Doc;
  form: Form;
  table: Table;
  text: Text;
  db: Db;
}