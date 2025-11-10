import type { CorrectionsTrackerRun } from "./run";
import type { CorrectionsTrackerTable } from "./table";

/**
 * Corrections tracker module for management in child tables
 */
export interface CorrectionsTracker {
  /** Run corrections tracker workflow */
  run: CorrectionsTrackerRun;
  /** Manage corrections tracker table operations */
  table: CorrectionsTrackerTable;
}