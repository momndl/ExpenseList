import React from "react";
import Card from "../UI/Card";

import "./ExpensesFilter.css";

export default function ExpensesFilter(props) {
    const selectYearHandler = (event) => {
        props.onYearChange(event.target.value);
    };
    return (
        <Card className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.default} onChange={selectYearHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </Card>
    );
}
