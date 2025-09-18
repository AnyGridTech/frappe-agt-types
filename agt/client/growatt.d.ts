import { GrowattApiResponse } from "../server/growatt_oss_api";
import { Item } from "@anygridtech/frappe-types/doctype/erpnext/Item"

export interface ClientGrowatt {
  /**
   * Regular expression to validate any Growatt device.
   */
  sn_regex: RegExp;
  /**
   * Regular expression to validate Growatt inverters and dataloggers (Shine).
   */
  iv_sn_regex: RegExp;
  /**
   * Regular expression to validate other Growatt devices (e.g., batteries, EV chargers).
   */
  other_sn_regex: RegExp;
  /**
   * Validates a Growatt serial number based on its type.
   * @param sn - The serial number to validate.
   * @param type - The type of device ('inverter', 'battery', or 'ev_charger').
   * @returns `true` if the serial number is valid, otherwise `false`.
   */
  validate_serial_number: (sn: string, type?: 'inverter' | 'battery' | 'ev_charger') => boolean;
  /**
   * Fetches Growatt serial number information from the Growatt official API.
   * 
   * @param serial_no - The serial number to fetch information for.
   * @returns A promise resolving to the API response, or `undefined` if the request fails.
   */
  get_growatt_sn_info: (serial_no: string) => Promise<GrowattApiResponse | undefined>;
  /**
   * This function helps finding the right item info based on item name.
   */
  get_item_info: (item_name: string, sn?: string) => Promise<Item | undefined>;
}