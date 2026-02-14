import {useState} from "react";
import type {Transaction} from "../types/transaction.ts";
import api from "../services/api.ts";

export default function useAddTransaction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addTransaction = async (data: Transaction)=> {
        setLoading(true);
        setError(null);

        try {
            await api.post("/transactions", data);
            return true;
        } catch(err) {
            console.error(err);
            setError("Failed to add transaction");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { addTransaction, loading, error};
}