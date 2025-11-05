import useFetchTransactions from "../../hooks/fetchTransactions";
import TransactionsActions from "./transactionsActions";
import TransactionsTable from "./transactionsTable";

export function IncomesPage() {
  const { loading, loadingMessage, transactions} = useFetchTransactions("INCOME");
  return (
    <>
      <TransactionsActions />
      <TransactionsTable label={"Incomes"} loading={loading} loadingMessage={loadingMessage} transactions={transactions}/>
    </>   
  );
}

export function ExpensesPage() {
  const { loading, loadingMessage, transactions } = useFetchTransactions("EXPENSE");
  return (
    <>
      <TransactionsActions />
      <TransactionsTable label={"Expenses"} loading={loading} loadingMessage={loadingMessage} transactions={transactions}/>
    </>   
  );
}

export function TransactionsPage() {
  const { loading, loadingMessage, transactions } = useFetchTransactions();
  return (
    <>
      <TransactionsActions />
      <TransactionsTable label={"Transactions"} loading={loading} loadingMessage={loadingMessage} transactions={transactions}/>
    </>    
  );
}  