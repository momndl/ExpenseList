import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    const formToggleHandler = () => {
        setShowForm((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="new-expense">
            {showForm ? (
                <ExpenseForm
                    onToggleForm={formToggleHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            ) : (
                <button onClick={formToggleHandler}>add new expense</button>
            )}
        </div>
    );
}
