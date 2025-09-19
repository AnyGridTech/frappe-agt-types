import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

interface BrazilianInvoiceTaxes extends FrappeDoc {
  is_system: number;
  main_base_calc: number;
  state_origin: string;
  state_destination: string;
  icms_standard: number;
  icms_interstate: number;
  //icms
  icms_origin: string;
  icms_mod_determ_bc: string; // What does mod_determ_bc mean????????
  icms_base_calc_fcp: number;
  icms_cst: string;
  icms_base_calc: number;
  icms_value: number;
  icms_rate: number;
  icms_fcp_rate: number;
  icms_auto_calc: number;
  icms_add_other_expenses: number;
  icms_add_freight: number;
  icms_add_ipi: number;
  icms_add_insurance: number;
  //ipi
  ipi_cst: string;
  ipi_base_calc: number;
  ipi_value: number;
  ipi_aliquota: number;
  ipi_framing_code: number;
  ipi_auto_calc: number;
  //cofins
  cofins_cst: string;
  cofins_rate: number;
  cofins_base_calc: number;
  cofins_valor: number;
  confins_auto_calc: number;
  //pis
  pis_cst: string;
  pis_base_calc: number;
  pis_value: number;
  pis_rate: number;
  pis_auto_calc: number;
}