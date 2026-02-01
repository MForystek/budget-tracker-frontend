import { useEffect, useState } from "react";
import type {Category, CategoryType} from "../types/category";
import api from "../services/api.ts";

export default function useCategories(type: CategoryType) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        api.get<Category[]>(`/categories?type=${type}`)
            .then(res => {
                setCategories(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, [type]);

    return { categories, loading };
}