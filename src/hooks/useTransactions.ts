import { useEffect, useState } from "react";
import api from "../services/api";
import type { Transaction } from "../types/transaction";
import type {CategoryType} from "../types/category.ts";

export default function useTransactions(type?: CategoryType) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingMessage, setLoadingMessage] = useState<string>("Loading...");

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await api.get<Transaction[]>("/transactions", {params: type ? {type} : {}});
                setTransactions(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoadingMessage("Failed to fetch transactions.");
            }
        }
        fetchTransactions();
    }, [type]);

    return { transactions, loading, loadingMessage };
}