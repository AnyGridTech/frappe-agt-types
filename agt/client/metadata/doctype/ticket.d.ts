import type { WorkflowAction } from "../utils/workflow_action";
import type { WorkflowState } from "../utils/workflow_state";

export interface Ticket {
  workflow_action: {
    finish: WorkflowAction;
    reject: WorkflowAction;
    hold: WorkflowAction;
    reactivate: WorkflowAction;
    cancel: WorkflowAction;
  },
  workflow_state: {
    active: WorkflowState;
    waiting_for_customer: WorkflowState;
    finished: WorkflowState;
    rejected: WorkflowState;
    cancelled: WorkflowState;
  }
}
