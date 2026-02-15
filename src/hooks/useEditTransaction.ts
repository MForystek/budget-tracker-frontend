import {useState} from "react";
import type {Transaction} from "../types/transaction.ts";
import api from "../services/api.ts";

export default function useEditTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const editTransaction = async (data: Transaction) => {
        setLoading(true);
        setError(null);

        try {
            await api.put(`/transactions/${data.id}`, data);
            return true;
        } catch (err) {
            console.log(err);
            setError("Failed to edit transaction");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { editTransaction, loading, error };
}