import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface CorrectionsChildList extends FrappeDoc {
  title: string;
  status: string;
  creation: string;
  modified: string;
  modified_by: string;
  orientation_text: string;
  owner: string;
  doc_owner: string;
  idx: number;
  json_data: string;
  parent: string;
  parentfield: string;
  parenttype: string;
  finished_date: string;
}
