import {useState} from "react";
import api from "../services/api.ts";

export default function useDeleteTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteTransaction = async (id: number) => {
        setLoading(true);
        setError(null);

        try {
            await api.delete(`/transactions/${id}`);
            return true;
        } catch (error) {
            console.error(error);
            setError("Failed to delete transaction");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { deleteTransaction, loading, error };
}