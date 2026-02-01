import type {Category, } from "../../types/category.ts";

interface TransactionsCategoriesProps {
    categories: Category[];
    value: string | null;
    onChange: (id: string) => void;
    disabled?: boolean;
}

export default function TransactionsCategories(props: TransactionsCategoriesProps) {
    return <select
        value={props.value ?? ""}
        disabled={props.disabled}
        onChange={e => props.onChange(e.target.value)}
        >
            <option value="" disabled>
                Select category
            </option>

        {props.categories.map(c => (
            <option key={c.id} value={c.name}>
                {c.name}
            </option>
        ))}
    </select>
}