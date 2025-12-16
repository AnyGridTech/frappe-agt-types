import type { Checklist } from "./doctype/checklist";
import type { ComplianceStatement } from "./doctype/compliance_statement";
import type { InitialAnalysis } from "./doctype/initial_analysis";
import type { Ticket } from "./doctype/ticket";

export interface Metadata {
  doctype: {
    checklist: Checklist;
    compliance_statement: ComplianceStatement;
    initial_analysis: InitialAnalysis;
    ticket: Ticket;
  }
}
