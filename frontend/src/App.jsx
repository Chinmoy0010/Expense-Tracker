import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GroupExpenses from './pages/GroupExpenses';
import LoginPage from './pages/LoginPage';
import BudgetSummary from './components/BudgetSummary';
import CategoryBudget from './components/CategoryBudget';
import EntryForm from './components/EntryForm';
import ExpenseGroup from './components/ExpenseGroup';
import Login from './components/Login';
import Visualization from './components/Visualization';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/group-expenses" component={GroupExpenses} />
        <Route path="/login" component={LoginPage} />
        <Route path="/budget-summary" component={BudgetSummary} />
        <Route path="/category-budget" component={CategoryBudget} />
        <Route path="/entry-form" component={EntryForm} />
        <Route path="/expense-group" component={ExpenseGroup} />
        <Route path="/visualization" component={Visualization} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;