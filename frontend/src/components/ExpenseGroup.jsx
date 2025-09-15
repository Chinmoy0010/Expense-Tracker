import React, { useState } from 'react';

const ExpenseGroup = () => {
    const [expenses, setExpenses] = useState([]);
    const [newExpense, setNewExpense] = useState({ amount: '', description: '', member: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExpense({ ...newExpense, [name]: value });
    };

    const addExpense = () => {
        setExpenses([...expenses, newExpense]);
        setNewExpense({ amount: '', description: '', member: '' });
    };

    const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);

    return (
        <div>
            <h2>Group Expenses</h2>
            <div>
                <input
                    type="text"
                    name="amount"
                    placeholder="Amount"
                    value={newExpense.amount}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={newExpense.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="member"
                    placeholder="Member"
                    value={newExpense.member}
                    onChange={handleInputChange}
                />
                <button onClick={addExpense}>Add Expense</button>
            </div>
            <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.member}: ${expense.amount} - {expense.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseGroup;