export interface Result {
  message: string;
  narrative: string;
  success: boolean;
  statusCode?: number;
}

export interface MetaEntity {
  page: number;
  pages?: number;
  limit: number;
  count?: number;
}
