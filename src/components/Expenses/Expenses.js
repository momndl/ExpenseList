import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses(props) {
    return (
        <Card className="expenses">
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
