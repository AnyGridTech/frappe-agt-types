import { DocMeta } from "@anygridtech/frappe-types/client/frappe/core";
import { UserShared } from "@anygridtech/frappe-types/client/frappe/model";

export interface Doc {
  /**
   * Creates a new document in the specified DocType with the given fields.
   * Validates the fields based on the DocType metadata before creating the document.
   * Special handling: If the DocType has a 'ref_naming_series' field, it will be automatically
   * set to the current form's docname (cur_frm.docname) regardless of the field value provided.
   * 
   * @template T - The type of the document being created.
   * @param doctype - The name of the DocType.
   * @param fields_dict - A dictionary of field-value pairs for the new document.
   * @returns A promise resolving to the name of the created document, or `undefined` if creation fails.
   */
  create_doc: (doctype: string, fields_target: string[], fields_dict: Record<string, any>) => Promise<string | undefined>;

  /**
   * Updates an existing document with the specified fields.
   * Validates fields before updating and handles conflicts (e.g., timestamp mismatches) by retrying up to 3 times.
   * 
   * @param doctype - The name of the DocType.
   * @param docname - The name of the document to update.
   * @param fields_record - A dictionary of fields to update.
   * @param retryCount - (Optional) Number of retry attempts in case of failure.
   * @returns A promise resolving to void.
   */
  update_doc: (doctype: string, docname: string, fields_record: Record<string, any>, retryCount?: number) => Promise<void>;

  /**
   * Fetches a document by its name and DocType.
   * 
   * @template T - The type of the document to fetch.
   * @param doctype - The name of the DocType.
   * @param docname - The name of the document to fetch.
   * @returns A promise resolving to the fetched document, or `undefined` if not found.
   */
  get_doc: <T>(doctype: string, docname: string) => Promise<T | undefined>;

  /**
   * Shares a document with specified users.
   * Adjusts permissions (read, write, share) for each user as specified in the `users` array.
   * 
   * @param doctype - The name of the DocType.
   * @param docname - The name of the document to share.
   * @param users - An array of `UserShared` objects specifying user permissions.
   * @returns A promise resolving to void.
   */
  share_doc: (doctype: string, docname: string, users: UserShared[]) => Promise<void>;

  /**
   * Fetches the doctype metadata for the specified DocType.
   * 
   * @param doctype - The name of the DocType to fetch metadata for.
   */
  get_doc_meta: (doctype: string) => Promise<DocMeta | undefined>;

}