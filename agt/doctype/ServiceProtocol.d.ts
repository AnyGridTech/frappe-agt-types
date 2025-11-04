import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";
import type { CorrectionsChildList } from "./CorrectionsChildList";
import type { ChecklistTable } from "./ChecklistTable";

export interface ServiceProtocol extends FrappeDoc {
  client_list: string | undefined;
  distributor: string | undefined;
  priority: string | undefined;
  service_partner_company: string | undefined;
  ext_fault_code: string | undefined;
  ext_fault_description: string | undefined;
  ext_fault_customer_description: string | undefined;
  ext_fault_support_description: string | undefined;
  ext_fault_date: string | undefined;
  ext_fault_video: string | undefined;
  current_issue_status?: string | undefined;
  main_eqp_model: string | undefined;
  main_eqp_family: string | undefined;
  main_eqp_serial_no: string | undefined;
  main_eqp_group: string | undefined;
  main_eqp_warehouse: string | undefined;
  main_eqp_initial_firmware: string | undefined;
  main_eqp_final_firmware: string | undefined;
  main_eqp_has_reseted: number | undefined;
  main_eqp_is_updated: number | undefined;
  main_eqp_is_online: number | undefined;
  main_eqp_has_neutral: number | undefined;
  main_eqp_has_transformer: number | undefined;
  main_eqp_has_stringbox: number | undefined;
  main_eqp_has_smartmeter: number | undefined;
  main_eqp_has_smartenergy: number | undefined;
  main_eqp_has_batteries: number | undefined;
  protocol_type:
  | "Warranty Inverter"
  | "Monitoring"
  | "Ev Charger"
  | undefined;
  issue_inverter: string | undefined;
  issue_monitoring: string | undefined;
  issue_ev_charger: string | undefined;
  warranty_claim_inverter: string | undefined;
  warranty_claim_ev_charger: string | undefined;
  warranty_claim_battery: string | undefined;
  corrections_feed?: CorrectionsChildList[];
  checklist_table_inverter?: ChecklistTable[];
  checklist_table_ev_charger?: ChecklistTable[];
  checklist_table_battery?: ChecklistTable[];
  checklist_table_transformer?: ChecklistTable[];
  checklist_table_smart_meter?: ChecklistTable[];
  checklist_table_smart_energy_manager?: ChecklistTable[];
  sp_docname?: string
  ticket_docname?: string
  // child_table?: string | string[];
  // child_table_name?: string | string[];
}
