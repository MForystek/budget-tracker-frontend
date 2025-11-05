import useFetchTransactions from "../../hooks/fetchTransactions";
import TransactionsTable from "./transactionsTable";

export function IncomesPage() {
  const { loading, loadingMessage, transactions} = useFetchTransactions("INCOME");
  return <TransactionsTable label={"Incomes"} loading={loading} loadingMessage={loadingMessage} transactions={transactions}/>;
}

export function ExpensesPage() {
  const { loading, loadingMessage, transactions } = useFetchTransactions("EXPENSE");
  return <TransactionsTable label={"Expenses"} loading={loading} loadingMessage={loadingMessage} transactions={transactions}/>;
}

export function TransactionsPage() {
  const { loading, loadingMessage, transactions } = useFetchTransactions();
  return <TransactionsTable label={"Transactions"} loading={loading} loadingMessage={loadingMessage} transactions={transactions}/>;
}  