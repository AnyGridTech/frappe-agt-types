import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface ComplianceStatement extends FrappeDoc {
    // Reference fields
    ref_naming_series?: string;
    main_customer_email?: string;
    main_customer_name?: string;
    main_eqp_model?: string;
    main_eqp_serial_no?: string;
    distributor?: string;
    ticket_docname?: string;

    // Agreement and terms
    check_agreement?: boolean;
    terms_and_conditions?: any;

    // Equipment information
    cod_failure?: string;
    fail_description?: string;
    sn_eqp?: string;
    eqp_model?: string;
    eqp_type?: string;
    phase?: string;

    // Location fields
    state?: string;
    uf_of_note?: string;

    // Customer information
    cust_taxid_type?: "Pessoa Física" | "Pessoa Jurídica";
    cust_taxid?: string;
    cust_name?: string;
    cust_attachs?: Array<{
        attach_type?: string;
        attach?: string;
    }>;
    cust_signature?: string;

    // Installation information
    inst_taxid_type?: "Pessoa Física" | "Pessoa Jurídica";
    inst_taxid?: string;
    inst_name?: string;
    inst_attachs?: Array<{
        attach_type?: string;
        attach?: string;
    }>;
    inst_signature?: string;

    // Fiscal information
    fiscal_taxid?: string;

    // Delivery information
    delivery_taxid_type?: string;
    delivery_name?: string;
    delivery_taxid?: string;
    delivery_cep?: string;
    delivery_uf?: string;
    delivery_address?: string;
    delivery_n?: string;
    delivery_hood?: string;
    delivery_city?: string;
    delivery_phone?: string;
    delivery_phone_alt?: string;
    delivery_allow_pickup?: "Sim" | "Não" | "";

    // Pickup information
    pickup_taxid_type?: string;
    pickup_name?: string;
    pickup_taxid?: string;
    pickup_cep?: string;
    pickup_uf?: string;
    pickup_phone?: string;
    pickup_phone_alt?: string;
    pickup_address?: string;
    pickup_n?: string;
    pickup_hood?: string;
    pickup_city?: string;

    // Final confirmation
    confirm_all?: any;
}