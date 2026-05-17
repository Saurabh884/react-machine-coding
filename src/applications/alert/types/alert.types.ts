export type alertType = "success" | "error" | "info";

export interface alertItem {
  id: number;
  message: string;
  type: alertType;
}
