import type { WorkflowAction } from "./utils/workflow_action";

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
}