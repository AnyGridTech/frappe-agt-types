import type { WorkflowAction } from "../utils/workflow_action";
import type { WorkflowState } from "../utils/workflow_state";

export interface ComplianceStatement {
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
  } // agt.doctype_namespace.compliance_statement.workflow_action
  workflow_state: {
    customer_finish_filling: WorkflowState;
    growatt_preliminary_assessment: WorkflowState;
    customer_fix_info: WorkflowState;
    growatt_review: WorkflowState;
    customer_checklist_requested: WorkflowState;
    checklist_finished: WorkflowState;
    shipping_proposal: WorkflowState;
    warranty_approved: WorkflowState;
    rejected: WorkflowState;
    finished: WorkflowState;
    cancelled: WorkflowState;
    approved: WorkflowState;
    finished_fixed: WorkflowState;
    finished_missing: WorkflowState;
    customer_necessary_action: WorkflowState;
  } // agt.doctype_namespace.compliance_statement.workflow_state
}