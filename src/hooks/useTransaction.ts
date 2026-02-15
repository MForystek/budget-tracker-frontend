import {useEffect, useState} from "react";
import type {Transaction} from "../types/transaction.ts";
import api from "../services/api.ts";

export default function useTransaction(id: number) {
    const [transaction, setTransaction] = useState<Transaction | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const response = await api.get<Transaction>(`/transasctions/${id}`);
                setTransaction(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch transaction");
            } finally {
                setLoading(false);
            }
        };
        fetchTransaction();
    }, [id]);

    return { transaction, loading, error };
}