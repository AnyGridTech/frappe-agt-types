import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface InvoiceTaxes extends FrappeDoc {
  is_system: number;
  main_base_calc: number;
  uf_origin: string;
  uf_destination: string;
  standard_icms: number;
  interstate_icms: number;
  //icms
  origem_icms: string;
  mod_determ_bc: string;
  base_calc_icms_fcp: number;
  cst_icms: string;
  base_calc_icms: number;
  icms_value: number;
  aliq_icms: number;
  aliq_fcp: number;
  calcular_automaticamente_icms: number;
  adiciona_outras_despesas_icms: number;
  adiciona_frete_icms: number;
  adiciona_ipi_icms: number;
  adiciona_seguro_icms: number;
  //ipi
  cst_ipi: string;
  base_de_calculo_ipi: number;
  valor_do_ipi: number;
  aliquota_ipi: number;
  cod_enquadramento: number;
  calcular_automaticamente_ipi: number;
  //cofins
  cst_cofins: string;
  aliquota_cofins: number;
  base_de_calculo_cofins: number;
  valor_cofins: number;
  calcular_automaticamente_cofins: number;
  //pis
  cst_pis: string;
  base_de_calculo_pis: number;
  valor_pis: number;
  aliquota_pis: number;
  calcular_automaticamente_pis: number;
}
