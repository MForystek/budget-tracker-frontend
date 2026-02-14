import useTransactions from "../../hooks/useTransactions.ts";
import type {CategoryType} from "../../types/category.ts";
import useDeleteTransaction from "../../hooks/useDeleteTransaction.ts";
import TransactionsTableHeader from "./transactionsTableHeader.tsx";
import TransactionsTableBody from "./transactionsTableBody.tsx";

interface TransactionTableProps {
    label: string;
    type?: CategoryType;
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