import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    return (
        <div className="expenses">
            {props.data.map((el, i) => (
                <ExpenseItem
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    key={i}
                />
            ))}
        </div>
    );
}
