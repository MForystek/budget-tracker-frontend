import TransactionsCategories from "./transactionsCategories.tsx";
import {useEffect, useState} from "react";
import type {CategoryType} from "../../types/category.ts";
import useCategories from "../../hooks/useCategories.ts";

export default function TransactionsAdding() {
    const todayDate = new Date().toISOString().split('T')[0];

    const [type, setType] = useState<CategoryType>('EXPENSE');
    const [categoryName, setCategoryName] = useState<string | null>(null);

    const { categories, loading } = useCategories(type);

    useEffect(() => {
        setCategoryName(null);
    }, [type]);

    return (
        <form action="/transactions" method="post">
            <label htmlFor="fdate">Date:</label>
            <input id="fdate" name="date" type="date" min="2000-01-01" max="3000-01-01"
                   defaultValue={todayDate} autoFocus={true}/><br/>

            <label htmlFor="famount">Amount:</label>
            <input id="famount" name="amount" type="text"/><br/>

            <label htmlFor="fcurrency">Currency:</label>
            <input id="fcurrency" name="currencyCode" type="text" value="PLN"/><br/>

            <label htmlFor="fcard">Card</label>
            <label htmlFor="fcash">Cash</label><br/>
            <input id="fcard" name="paymentMethod" type="radio" value="CARD" defaultChecked={true}/>
            <input id="fcash" name="paymentMethod" type="radio" value="CASH"/><br/>

            <label htmlFor="fdescription">Description:</label>
            <input id="fdescription" name="description" type="text"/><br/>

            <label htmlFor="fincome">Income</label>
            <label htmlFor="fexpense">Expense</label><br/>
            <input
                id="fincome"
                name="categoryType"
                type="radio"
                value="INCOME"
                checked={type === "INCOME"}
                onChange={() => setType("INCOME")}
            />
            <input
                id="fexpense"
                name="categoryType"
                type="radio"
                value="EXPENSE"
                checked={type === "EXPENSE"}
                onChange={() => setType("EXPENSE")}
            /><br/>

            <TransactionsCategories
                categories={categories}
                value={categoryName}
                onChange={setCategoryName}
                disabled={loading}
            /><br/>

            <input type="submit" value="Add transaction"/>
        </form>
    );
}