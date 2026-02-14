import type { Transaction } from "../../types/transaction";
import TransactionsButton from "./transactionsButton";
import useTransactions from "../../hooks/useTransactions.ts";
import type {CategoryType} from "../../types/category.ts";
import useDeleteTransaction from "../../hooks/useDeleteTransaction.ts";
import {useNavigate} from "react-router-dom";

interface TransactionTableBodyProps {
    transactions: Transaction[];
    onDelete: (id: number) => void;
}

interface TransactionTableProps {
    label: string;
    type?: CategoryType;
}

function TransactionsTableHeader() {
    const navigate = useNavigate();

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
            <th colSpan={2}><TransactionsButton bgColor="green" label="Add new" onClick={() => navigate("/transactions/add")}/></th>
        </tr>
        </thead>
    );
}

function TransactionsTableBody(props: TransactionTableBodyProps) {
    const confirmAndHandleDelete = (transaction: Transaction) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this transaction?\n\n" +
            `Date: ${transaction.date}\n` +
            `Amount: ${transaction.amount} ${transaction.currencyCode}\n` +
            `Description: ${transaction.description}\n`
        );

        if (confirmDelete) {
            props.onDelete(transaction.id);
        }
    };

    return (
        <tbody>
        {props.transactions.map((transaction) => (
            <tr key={transaction.id}>
                <td className="transaction-table">{transaction.date}</td>
                <td className="transaction-table">{transaction.amount.toFixed(2)}</td>
                <td className="transaction-table">{transaction.currencyCode}</td>
                <td className="transaction-table">{transaction.paymentMethod}</td>
                <td className="transaction-table">{transaction.description}</td>
                <td className="transaction-table">{transaction.categoryName}</td>
                <td className="transaction-table">{transaction.categoryType}</td>
                <td><TransactionsButton bgColor="blue" label="Edit" onClick={() => {console.log("/transactions/"+transaction.id)}}/></td>
                <td><TransactionsButton bgColor="red" label="Delete" onClick={() => confirmAndHandleDelete(transaction)}/></td>
            </tr>
        ))}
        </tbody>
    );
}

export default function TransactionTable({ label, type }: TransactionTableProps) {
    const { transactions, loading, loadingMessage} = useTransactions(type);

    const { deleteTransaction, loading: deleteLoading, error: deleteError } = useDeleteTransaction();

    const handleDelete = async (id: number) => {
        const success = await deleteTransaction(id);

        if (success) {
            alert("Transaction deleted successfully.");
            window.location.reload();
        } else {
            alert(deleteError);
        }
    };

    return (
        <>
            <h2>{label}</h2>
            {deleteLoading &&
                <div style={{backgroundColor: "#d4edda", color: "#155724", padding: "10px", marginBottom: "10px", borderRadius: "4px"}}>
                    Delete in progress...
                </div>
            }
            <div>
                {loading ? (
                    <div>{loadingMessage}</div>
                ) : (
                    <div style={{float: "left"}}>
                        <table style={{ borderCollapse: "collapse", width: "100%" }}>
                            <TransactionsTableHeader />
                            <TransactionsTableBody transactions={transactions} onDelete={handleDelete} />
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}