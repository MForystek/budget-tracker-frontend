import { useEffect, useState } from "react";
import type {Category, CategoryType} from "../types/category";
import api from "../services/api.ts";

export default function useCategories(type: CategoryType) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get<Category[]>(`/categories?type=${type}`);
                setCategories(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, [type]);

    return { categories, loading };
}