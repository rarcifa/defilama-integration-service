export interface IHealthcheckResponse {
  uptime: number;
  responsetime: number[];
  message: string;
  timestamp: number;
}
