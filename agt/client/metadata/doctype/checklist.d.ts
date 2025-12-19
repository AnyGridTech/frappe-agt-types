import type { WorkflowAction } from "../utils/workflow_action";
import type { WorkflowState } from "../utils/workflow_state";

export interface Checklist {
  workflow_action: {
    request_revision: WorkflowAction;
    finish: WorkflowAction;
    reject: WorkflowAction;
    cancel: WorkflowAction;
    approve_correction: WorkflowAction;
  },
  workflow_state: {
    holding_action: WorkflowState;
    growatt_review: WorkflowState;
    finished: WorkflowState;
    rejected: WorkflowState;
    cancelled: WorkflowState;
  }
}
