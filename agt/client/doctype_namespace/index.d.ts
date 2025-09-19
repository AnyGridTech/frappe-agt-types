import type { ClientDoctypeNamespaceChecklist } from "./checklist";
import type { ClientDoctypeNamespaceComplianceStatement } from "./compliance_statement";
import type { ClientDoctypeNamespaceCorrectionsTracker } from "./corrections_tracker";
import type { ClientDoctypeNamespaceServiceProtocol } from "./service_protocol";
import type { ClientDoctypeNamespaceTicket } from "./ticket";

export interface ClientDoctypeNamespace {
  corrections_tracker: ClientDoctypeNamespaceCorrectionsTracker; // agr.doctype_namespace.corrections_tracker
  service_protocol: ClientDoctypeNamespaceServiceProtocol; // agr.doctype_namespace.service_protocol
  compliance_statement: ClientDoctypeNamespaceComplianceStatement; // agr.doctype_namespace.compliance_statement
  checklist: ClientDoctypeNamespaceChecklist; // agr.doctype_namespace.checklist
  ticket: ClientDoctypeNamespaceTicket; // agr.doctype_namespace.ticket
}