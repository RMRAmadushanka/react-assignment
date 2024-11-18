export interface Table {
    id: string;
    name: string;
    minCovers: number;
    maxCovers: number;
    x: number;
    y: number;
    isOnline: boolean;
  }
  
  export type Layout = Table[];
  