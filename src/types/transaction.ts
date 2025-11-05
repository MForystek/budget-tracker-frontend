export interface Category {
  id: number;
  name: string;
  type: "INCOME" | "EXPENSE";
}

export interface Currency {
  id: number;
  code: string;
  name: string;
}

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  currency: Currency;
  paymentMethod: "CASH" | "CARD";
  description: string;
  category: Category;
}
