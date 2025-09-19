import type { FrappeForm } from "@anygridtech/frappe-types/client/frappe/core";

export type WorkflowActionExtended = "SAVE" | "LOAD";

export type WorkflowField<T = any> = {
  name: string;
  should_validate?: (form: FrappeForm<T>) => boolean;
  depends_on?: (form: FrappeForm<T>) => string | undefined;
}

export interface WorkflowValidation<T = any> {
  workflow_state: string;
  workflow_action: string | string[];
  action_extended?: WorkflowActionExtended[];
  workflow_fields: WorkflowField<T>[];
}