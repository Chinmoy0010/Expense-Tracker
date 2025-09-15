import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseGroup from '../components/ExpenseGroup';

const GroupExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('/api/group-expenses');
                setExpenses(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExpenses();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Group Expenses</h1>
            {expenses.length === 0 ? (
                <p>No expenses recorded.</p>
            ) : (
                expenses.map(expense => (
                    <ExpenseGroup key={expense.id} expense={expense} />
                ))
            )}
        </div>
    );
};

export default GroupExpenses;