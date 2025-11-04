import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";
import type { ChecklistTable } from "./ChecklistTable";

export interface StockEntry extends FrappeDoc {
  ext_fault_code: string;
  ext_fault_date: string;
  main_eqp_serial_no: string;
  stock_entry_type?:
  | "Warranty First Entry"
  | "Warranty Warehouse Transfer"
  | "Repair Process";
  purpose?:
  | "Material Issue"
  | "Material Receipt"
  | "Material Transfer"
  | "Material Transfer for Manufacture"
  | "Material Consumption for Manufacture"
  | "Manufacture"
  | "Repack"
  | "Send to Subcontractor"
  | "Disassemble";
  company?: string;
  posting_date: string;
  posting_time: string;
  items: StockEntryItem[];
  remarks?: string;
  checklist_table_inverter: ChecklistTable[];
  checklist_table_ev_charger: ChecklistTable[];
  checklist_table_battery: ChecklistTable[];
  checklist_table_transformer: ChecklistTable[];
  checklist_table_smart_meter: ChecklistTable[];
  checklist_table_smart_energy_manager: ChecklistTable[];
  checklist_table_datalogger: ChecklistTable[];
}

export interface StockEntryItem extends FrappeDoc {
  item_code: string;
  item_name: string;
  description?: string;
  qty: number;
  uom: string;
  conversion_factor?: number;
  t_warehouse?: string;
  s_warehouse?: string;
  serial_no?: string;
  batch_no?: string;
}
