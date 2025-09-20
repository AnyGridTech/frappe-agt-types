import type { WorkflowAction } from "./utils/workflow_action";
import type { WorkflowState } from "./utils/workflow_state";

export interface ClientDoctypeNamespaceTicket {
  workflow_action: {
    approve: WorkflowAction;
    finish: WorkflowAction;
    reject: WorkflowAction;
    cancel: WorkflowAction;
    reactive: WorkflowAction;
  } // agt.doctype_namespace.ticket.workflow_action
  workflow_state: {
    draft: WorkflowState;
    active: WorkflowState;
    finished: WorkflowState;
    rejected: WorkflowState;
    cancelled: WorkflowState;
  } // agt.doctype_namespace.ticket.workflow_state
}