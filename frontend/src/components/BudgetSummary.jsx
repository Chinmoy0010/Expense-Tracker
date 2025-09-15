import React from 'react';

const BudgetSummary = ({ totalIncome, totalExpenses }) => {
    const remainingBudget = totalIncome - totalExpenses;

    return (
        <div className="budget-summary">
            <h2>Budget Summary</h2>
            <div>
                <strong>Total Income:</strong> ${totalIncome.toFixed(2)}
            </div>
            <div>
                <strong>Total Expenses:</strong> ${totalExpenses.toFixed(2)}
            </div>
            <div>
                <strong>Remaining Budget:</strong> ${remainingBudget.toFixed(2)}
            </div>
        </div>
    );
};

export default BudgetSummary;