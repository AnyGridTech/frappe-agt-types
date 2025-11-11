import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";

export interface ComplianceStatement extends FrappeDoc {
    // Customer information
    cust_taxid_type?: string;
    cust_taxid?: string;
    cust_name?: string;
    cust_signature?: string;
    section_cust_attachs?: string;

    // Installation information
    inst_taxid_type?: string;
    inst_taxid?: string;
    inst_name?: string;
    inst_signature?: string;
    section_inst_attachs?: string;

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

    // Pickup information
    pickup_taxid_type?: string;
    pickup_name?: string;
    pickup_taxid?: string;
    pickup_cep?: string;
    pickup_uf?: string;
    pickup_phone?: string;
    pickup_address?: string;
    pickup_n?: string;
    pickup_hood?: string;
    pickup_city?: string;

    // Additional fields
    section_confirm_all?: boolean;
    hidden?: boolean;
}
