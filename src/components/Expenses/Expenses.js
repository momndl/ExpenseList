import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2019");
    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter
                default={filteredYear}
                onYearChange={yearChangeHandler}
            />
            {props.data.map((el, i) => (
                <ExpenseItem
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    key={i}
                />
            ))}
        </Card>
    );
}
