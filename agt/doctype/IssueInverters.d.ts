import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface IssueInverters extends FrappeDoc {
  serial_no: string;
  item_code: string;
  UF: string;
  status: "Active" | "Inactive" | "Delivered" | "Expired";
}
