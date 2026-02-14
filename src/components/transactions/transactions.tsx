import TransactionsTable from "./transactionsTable";

export function IncomesPage() {
  return (
    <TransactionsTable
      label={"Incomes"}
      type={"INCOME"}
    />
  );
}

export function ExpensesPage() {
  return (
    <TransactionsTable
      label={"Expenses"}
      type={"EXPENSE"}
    />
  );
}

export function TransactionsPage() {
  return (
    <TransactionsTable
      label={"Transactions"}
    />
  );
}
