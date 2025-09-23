import type { WorkflowAction } from "./utils/workflow_action";
import type { WorkflowState } from "./utils/workflow_state";

export interface ServiceProtocol {
  workflow_action: {
    approve: WorkflowAction;
    request_analysis: WorkflowAction;
    request_correction: WorkflowAction;
    finish_review: WorkflowAction;
    reject: WorkflowAction;
    finish_service: WorkflowAction;
    cancel: WorkflowAction;
    finish_correction: WorkflowAction;
    request_documentation: WorkflowAction;
    request_checklist: WorkflowAction;
    forward_to_support: WorkflowAction;
    request_shipping_proposal: WorkflowAction;
  } // agt.doctype_namespace.service_protocol.workflow_action
  workflow_state: {
    holding_action: WorkflowState;
    growatt_review: WorkflowState;
    rejected: WorkflowState;
    finished: WorkflowState;
    cancelled: WorkflowState;
  } // agt.doctype_namespace.service_protocol.workflow_state
}

