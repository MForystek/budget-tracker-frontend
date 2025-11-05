import type { Transaction } from "../../types/transaction";

interface TransactionTableBodyProps {
  transactions: Transaction[];
}

interface TransactionTableProps {
  label: string;
  loading: boolean;
  loadingMessage: string;
  transactions: Transaction[];
}

function TransactionTableHeader() {
  return (
    <>
      <thead>
        <tr>
          <th className="transaction-table">Date</th>
          <th className="transaction-table">Amount</th>
          <th className="transaction-table">Currency</th>
          <th className="transaction-table">Payment method</th>
          <th className="transaction-table">Description</th>
          <th className="transaction-table">Category</th>
          <th className="transaction-table">Type</th>
        </tr>
      </thead>
    </>
  );
}

function TransactionTableBody({ transactions }: TransactionTableBodyProps) {
  return (
    <>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className="transaction-table">{transaction.date}</td>
            <td className="transaction-table">{transaction.amount.toFixed(2)}</td>
            <td className="transaction-table">{transaction.currency.code}</td>
            <td className="transaction-table">{transaction.paymentMethod}</td>
            <td className="transaction-table">{transaction.description}</td>
            <td className="transaction-table">{transaction.category.name}</td>
            <td className="transaction-table">{transaction.category.type}</td>
          </tr>
        ))}
      </tbody>
    </>
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
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <TransactionTableHeader />
            <TransactionTableBody transactions={transactions} />
          </table>
        )}
      </div>
    </>
  );
}