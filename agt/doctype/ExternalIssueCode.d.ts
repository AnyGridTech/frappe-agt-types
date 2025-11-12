import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface ExternalIssueCode extends FrappeDoc {
external_issue_code_id?: string;
version?: string;
family?: string;
error_name?: string;
technical_suggestions_id?: string;
type?: string;
checklist?: string;
}