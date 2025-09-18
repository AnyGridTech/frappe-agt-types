import { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface ChecklistTable extends FrappeDoc {
  child_tracker_docname: string;
  child_tracker_doctype: string;
  child_tracker_workflow_state: string;
}