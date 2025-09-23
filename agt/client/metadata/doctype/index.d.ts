import type { Checklist } from "./checklist";
import type { ComplianceStatement } from "./compliance_statement";
import type { CorrectionsTracker } from "./corrections_tracker";
import type { ServiceProtocol } from "../service_protocol";
import type { Ticket } from "../ticket";

export interface DoctypeNamespace {
  corrections_tracker: CorrectionsTracker; // agr.doctype_namespace.corrections_tracker
  service_protocol: ServiceProtocol; // agr.doctype_namespace.service_protocol
  compliance_statement: ComplianceStatement; // agr.doctype_namespace.compliance_statement
  checklist: Checklist; // agr.doctype_namespace.checklist
  ticket: Ticket; // agr.doctype_namespace.ticket
}