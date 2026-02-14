import TransactionsCategories from "./transactionsCategories.tsx";
import {useEffect, useState} from "react";
import type {CategoryType} from "../../types/category.ts";
import useCategories from "../../hooks/useCategories.ts";
import TransactionsAmount from "./transactionsAmount.tsx";
import useAddTransaction from "../../hooks/useAddTransaction.ts";
import * as React from "react";
import {useNavigate} from "react-router-dom";

export default function TransactionsAdding() {
    const navigate = useNavigate();


    // Date
    const todayDate = new Date().toISOString().split('T')[0];


    // Amount
    const [amount, setAmount] = useState('');
    const [amountError, setAmountError] = useState<string | null>(null);

    const validateAmount = () => {
        if (amount === null || amount === '') {
            return "Amount is required";
        }
        const numValue: number = Number(amount.trim());

        if (isNaN(numValue)) {
            return "Amount must be a number";
        }
        if (numValue <= 0.0) {
            return "Amount must be greater than 0";
        }
        return null;
    };

    const handleAmountBlur = () => {
        const error = validateAmount();
        setAmountError(error);
    }


    // Category and CategoryType
    const [type, setType] = useState<CategoryType>('EXPENSE');
    const [categoryName, setCategoryName] = useState<string | null>(null);

    const { categories, loading: categoriesLoading } = useCategories(type);

    useEffect(() => {
        setCategoryName(null);
    }, [type]);


    // Submit
    const { addTransaction, loading: submitLoading, error: submitError} = useAddTransaction();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault(); // Don't use default HTML form submission

        const error = validateAmount();
        if (error) {
            setAmountError(error);
            return;
        }

        if (!categoryName) {
            alert("Category name is required");
            return;
        }

        const formData = new FormData(e.currentTarget);

        const transactionData = {
            id: -1,
            date: formData.get("date") as string,
            amount: Number(amount),
            currencyCode: formData.get("currencyCode") as string,
            paymentMethod: formData.get("paymentMethod") as "CARD" | "CASH",
            description: formData.get("description") as string,
            categoryName: categoryName,
            categoryType: type,
        }

        const success = await addTransaction(transactionData);

        if (success) {
            navigate("/transactions");
        }
    };

    return (
        <form onSubmit={handleSubmit}> {
            submitError && (
                <div style={{color: "red", marginBottom: "1em"}}>
                    {submitError}
                </div>
            )}

            <label>
                Date:
                <input
                    name="date"
                    type="date"
                    min="2000-01-01"
                    defaultValue={todayDate}
                    autoFocus={true}/>
            </label><br/>

            <TransactionsAmount
                value={amount}
                onChange={setAmount}
                error={amountError}
                onBlur={handleAmountBlur}
            /><br/>

            <label>
                Currency:
                <input
                    name="currencyCode"
                    type="text"
                    defaultValue="PLN"/>
            </label><br/>

            <label>
                Card Cash<br/>
                <input
                    name="paymentMethod"
                    type="radio"
                    value="CARD"
                    readOnly
                    defaultChecked={true}/>
                <input
                    name="paymentMethod"
                    type="radio"
                    value="CASH"
                    readOnly/>
            </label><br/>

            <label>
                <input
                    name="description"
                    type="text"
                    placeholder="Description..."/>
            </label><br/>

            <label>
                Income Expense<br/>
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
                />
            </label><br/>

            <TransactionsCategories
                categories={categories}
                value={categoryName}
                onChange={setCategoryName}
                disabled={categoriesLoading}
            /><br/>

            <input
                type="submit"
                value={submitLoading ? "Adding..." : "Add transaction"}
                readOnly
                disabled={submitLoading}/>
        </form>
    );
}