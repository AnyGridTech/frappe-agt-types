import type { WorkflowAction } from "../utils/workflow_action";
import type { WorkflowState } from "../utils/workflow_state";

export interface ServiceProtocol {
  workflow_action: {
    request_revision: WorkflowAction;
    request_checklist: WorkflowAction;
    request_correction: WorkflowAction;
    reject: WorkflowAction;
    cancel: WorkflowAction;
    finish_correction: WorkflowAction
  }, // agt.doctype_namespace.service_protocol.workflow_action
  workflow_state: {
    holding_action: WorkflowState;
    growatt_review: WorkflowState;
    finished: WorkflowState;
    rejected: WorkflowState;
    cancelled: WorkflowState;
  } // agt.doctype_namespace.service_protocol.workflow_state
}