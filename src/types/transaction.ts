import type {CategoryType} from "./category.ts";

export interface Transaction {
  date: string;
  amount: number;
  currencyCode: string;
  paymentMethod: "CASH" | "CARD";
  description: string;
  categoryName: string;
  categoryType: CategoryType;
}
