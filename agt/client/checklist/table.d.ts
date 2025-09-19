export interface ClientChecklistTable {
  /**
   * Sets up the Checklist Tracker custom integrations for all tables supported by the doctype.
   */
  all: ChecklistTableFunctions; // agt.checklist.table.all
  inverter: ChecklistTableFunctions; // agt.checklist.table.inverter
  ev_charger: ChecklistTableFunctions; // agt.checklist.table.ev_charger
  battery: ChecklistTableFunctions; // agt.checklist.table.battery
  transformer: ChecklistTableFunctions; // agt.checklist.table.transformer
  smart_meter: ChecklistTableFunctions; // agt.checklist.table.smart_meter
  smart_energy_manager: ChecklistTableFunctions; // agt.checklist.table.smart_energy_manager
  datalogger: ChecklistTableFunctions; // agt.checklist.table.datalogger
}

/**
 * Sets up the Checklist Tracker custom integrations.
 * 
 */
type ChecklistTableFunctions = { setup: () => Promise<void> }; // agt.checklist.table._.setup