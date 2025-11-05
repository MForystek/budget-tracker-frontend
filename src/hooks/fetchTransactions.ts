import { useEffect, useState } from "react";
import api from "../services/api";
import type { Transaction } from "../types/transaction";

export default function(type?: "INCOME" | "EXPENSE") {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingMessage, setLoadingMessage] = useState<string>("Loading...");

    useEffect(() => {
        api.get<Transaction[]>("/transactions", { params: type ? { type } : {} })
            .then(res => {
                setTransactions(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoadingMessage("Failed to fetch transactions.")
            })
    }, [type]);

    return { loading, loadingMessage, transactions };
}