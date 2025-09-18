export interface GrowattApiResponse {
  code: number;           // Status code of the response
  msg: string;            // Message describing the response
  data: GrowattDeviceInfo;       // Object containing detailed information
}

export interface GrowattDeviceInfo {
  id: number;             // Unique ID of the device
  orderNumber: string;    // Order number associated with the device
  accountName: string;    // Account name (partially masked)
  accountName2: string;   // Additional account name (partially masked)
  model: string;          // Model of the device
  deviceSN: string;       // Serial number of the device
  deliveryTime: string;   // Delivery date in ISO format (YYYY-MM-DD)
  warrantyTime: number;   // Warranty duration in years
  outTime: string;        // Warranty expiration date in ISO format (YYYY-MM-DD)
  code: string;           // Device code
  number4Years: string;   // Reserved or additional data (appears to be empty)
  lastUpdateTime: string; // Last updated timestamp (YYYY-MM-DD HH:mm:ss)
  operationName: string;  // Name of the operator or handler
  month: number;          // Reserved data (seems to be a count or metric)
  area: number;           // Area or region ID
  countryId: number;      // Country ID
  deviceType: number;     // Type of the device
  isToShip: number;       // Flag indicating if the device is to be shipped
  isPush: number;         // Flag indicating push notification status
  isPushCount: number;    // Count of push attempts
  isPushOa: number;       // Additional push notification status
}