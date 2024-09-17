export interface IAimData extends IAim {
  id: string;
}

export interface IAim {
  id: string;
  title: string;
  description: string;
  complexity: number;
  aimsCategoryId?: string;
  sphereId?: string;
  dateFrom: string;
  dateTo: string;
  progress: number;
  value: any;
  aimType: "number" | "boolean";
  calculationType: "sum" | "lastMeasureAsc" | "lastMeasureDesc";
  isRelatedWithHabit: boolean;
  finalAim: number;
  startedPoint: number;
  currentValue?: number;
  relatedHabit: string[];
  relatedList: string[];
}
