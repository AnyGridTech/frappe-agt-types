import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface SerialNoWorkflow extends FrappeDoc {
  next_step: string;
  checkbox_force_state: number;
  serial_no_table: SerialNoWorkflowTable[]
}

export interface SerialNoWorkflowTable extends FrappeDoc {
  serial_no: string;
  item_code: string;
  item_name: string;
  company: string;
  current_workflow_state: string;
  next_step: string;
  output_info: string;
  is_success: number;
}