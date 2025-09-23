import type { Checklist } from "./doctype/checklist";
import type { ComplianceStatement } from "./doctype/compliance_statement";
import type { CorrectionsTracker } from "./doctype/corrections_tracker";
import type { ServiceProtocol } from "./doctype/service_protocol";
import type { Ticket } from "./doctype/ticket";

export interface Metadata {
  doctype: {
    corrections_tracker: CorrectionsTracker; // agr.metadata.doctype.corrections_tracker
    service_protocol: ServiceProtocol; // agr.metadata.doctype.service_protocol
    compliance_statement: ComplianceStatement; // agr.metadata.doctype.compliance_statement
    checklist: Checklist; // agr.metadata.doctype.checklist
    ticket: Ticket; // agr.metadata.doctype.ticket
  }
}