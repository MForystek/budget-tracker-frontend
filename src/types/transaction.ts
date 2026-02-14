import type {CategoryType} from "./category.ts";

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  currencyCode: string;
  paymentMethod: "CASH" | "CARD";
  description: string;
  categoryName: string;
  categoryType: CategoryType;
}
