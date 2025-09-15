import React from 'react';
import BudgetSummary from '../components/BudgetSummary';
import CategoryBudget from '../components/CategoryBudget';
import Visualization from '../components/Visualization';

const Dashboard = () => {
    return (
        <div>
            <h1>Personal Budget Tracker Dashboard</h1>
            <BudgetSummary />
            <CategoryBudget />
            <Visualization />
        </div>
    );
};

export default Dashboard;