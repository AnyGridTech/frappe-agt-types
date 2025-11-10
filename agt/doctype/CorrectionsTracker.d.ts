import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface CorrectionsTrackerDoc extends FrappeDoc {
  status: string;
  created_date: string;
  created_by: string;
  finished_by?: string;
  finished_date?: string;
  correction_label?: string;
  correction_text?: string;
}