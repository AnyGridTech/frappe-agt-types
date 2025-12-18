import type { FrappeDoc } from "@anygridtech/frappe-types/client/frappe/core";
import type { CorrectionsTrackerDoc } from "@anygridtech/frappe-agt-types/agt/doctype/CorrectionsTracker";

export interface ChildTrackerTableDoc extends FrappeDoc {
    child_tracker_docname?: string;
    child_tracker_doctype?: string;
    child_tracker_workflow_state?: string;
}

export interface InitialAnalysis extends FrappeDoc {
    // Naming
    naming_series?: "INANLY-.MM.YY.-.####";
    
    // Derived Documents
    ticket_docname?: string;
    inanly_docname?: string;
    child_tracker_table?: ChildTrackerTableDoc[];
    
    // Attachments
    main_eqp_purchase_invoice?: string;
    main_eqp_serial_no_label_picture?: string;
    oss_data_extraction?: string;
    
    // Failure Information
    ext_fault_date?: string;
    ext_fault_code?: string;
    ext_fault_description?: string;
    ext_fault_customer_description?: string;
    
    // Preliminary Analysis (Check fields)
    main_eqp_is_online?: number;
    main_eqp_has_updated?: number;
    main_eqp_has_reseted?: number;
    main_eqp_has_neutral?: number;
    main_eqp_has_stringbox?: number;
    main_eqp_has_battery?: number;
    main_eqp_has_transformer?: number;
    main_eqp_has_sm?: number;
    main_eqp_has_sem?: number;
    
    // Analysis Conclusion
    solution_description?: string;
    solution_select?: 
        | "Parameterization"
        | "Installation"
        | "Technical Questions"
        | "Deep Analysis"
        | "No Action Needed"
        | "Update Firmware";
    
    // Internal Information
    priority?: "Maximum" | "Reclame Aqui" | "Legal Process";
    corrections_tracker?: CorrectionsTrackerDoc[];
    
    // System Fields
    email_applicant?: string;
    subject_email?: string;
}
