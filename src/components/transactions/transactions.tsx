import useTransactions from "../../hooks/useTransactions.ts";
import TransactionsTable from "./transactionsTable";

export function IncomesPage() {
  const { loading, loadingMessage, transactions } =
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
  const { loading, loadingMessage, transactions } =
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
  const { loading, loadingMessage, transactions } = 
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
