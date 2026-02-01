import type { Transaction } from "../../types/transaction";
import TransactionsButton from "./transactionsButton";

interface TransactionTableBodyProps {
  transactions: Transaction[];
}

interface TransactionTableProps {
  label: string;
  loading: boolean;
  loadingMessage: string;
  transactions: Transaction[];
}

function TransactionsTableHeader() {
  return (
    <thead>
      <tr>
        <th className="transaction-table">Date</th>
        <th className="transaction-table">Amount</th>
        <th className="transaction-table">Currency</th>
        <th className="transaction-table">Payment method</th>
        <th className="transaction-table">Description</th>
        <th className="transaction-table">Category</th>
        <th className="transaction-table">Type</th>
        <th colSpan={2}><TransactionsButton bgColor="green" label="Add new" navigatePath="/transactions/add"/></th>
      </tr>
    </thead>
  );
}

function TransactionsTableBody({ transactions }: TransactionTableBodyProps) {
  return (
    <tbody>
      {transactions.map((transaction) => (
        <tr key={transaction.date.toString()+transaction.amount}>
          <td className="transaction-table">{transaction.date}</td>
          <td className="transaction-table">{transaction.amount.toFixed(2)}</td>
          <td className="transaction-table">{transaction.currencyCode}</td>
          <td className="transaction-table">{transaction.paymentMethod}</td>
          <td className="transaction-table">{transaction.description}</td>
          <td className="transaction-table">{transaction.categoryName}</td>
          <td className="transaction-table">{transaction.categoryType}</td>
          <td><TransactionsButton bgColor="blue" label="Edit" navigatePath="/transactions/edit"/></td>
          <td><TransactionsButton bgColor="red" label="Delete" navigatePath="/transactions/delete"/></td>
        </tr>
      ))}
    </tbody>
  );
}

export default function TransactionTable({ label, loading, loadingMessage, transactions }: TransactionTableProps) {
  return (
    <>
      <h2>{label}</h2>
      <div>
        {loading ? (
          <div>{loadingMessage}</div>
        ) : (
          <>
            <div style={{float: "left"}}>
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <TransactionsTableHeader />
                <TransactionsTableBody transactions={transactions} />
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}