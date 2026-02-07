import useTransactions from "../../hooks/useTransactions.ts";
import TransactionsTable from "./transactionsTable";

export function IncomesPage() {
  const { transactions, loading, loadingMessage } =
    useTransactions("INCOME");
  return (
    <TransactionsTable
      label={"Incomes"}
      loading={loading}
      loadingMessage={loadingMessage}
      transactions={transactions}
    />
  );
}

export function ExpensesPage() {
  const { transactions, loading, loadingMessage } =
    useTransactions("EXPENSE");
  return (
    <TransactionsTable
      label={"Expenses"}
      loading={loading}
      loadingMessage={loadingMessage}
      transactions={transactions}
    />
  );
}

export function TransactionsPage() {
  const { transactions, loading, loadingMessage } =
    useTransactions();
  return (
    <TransactionsTable
      label={"Transactions"}
      loading={loading}
      loadingMessage={loadingMessage}
      transactions={transactions}
    />
  );
}
