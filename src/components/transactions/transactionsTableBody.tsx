import type {Transaction} from "../../types/transaction.ts";
import TransactionsButton from "./transactionsButton";
import {useNavigate} from "react-router-dom";

interface TransactionTableBodyProps {
    transactions: Transaction[];
    onDelete: (id: number) => void;
}

export default function TransactionsTableBody(props: TransactionTableBodyProps) {
    const navigate = useNavigate();

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
                <td><TransactionsButton bgColor="blue" label="Edit" onClick={() => navigate(`/transactions/edit/${transaction.id}`)}/></td>
                <td><TransactionsButton bgColor="red" label="Delete" onClick={() => confirmAndHandleDelete(transaction)}/></td>
            </tr>
        ))}
        </tbody>
    );
}