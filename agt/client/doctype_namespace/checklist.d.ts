import type { WorkflowState } from "./utils/workflow_state";

export interface ClientDoctypeNamespaceChecklist {
  workflow_state: {
    pre_analysis: WorkflowState;
    customer_fix_info: WorkflowState;
    growatt_review: WorkflowState;
    finished: WorkflowState;
    rejected: WorkflowState;
    cancelled: WorkflowState;
  } // agt.doctype_namespace.checklist.workflow_state
}