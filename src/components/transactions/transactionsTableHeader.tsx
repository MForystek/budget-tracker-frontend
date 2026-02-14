import {useNavigate} from "react-router-dom";
import TransactionsButton from "./transactionsButton.tsx";

export default function TransactionsTableHeader() {
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