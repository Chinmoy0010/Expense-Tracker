import React, { useState, useEffect } from 'react';

const CategoryBudget = () => {
    const [categories, setCategories] = useState([]);
    const [budgets, setBudgets] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch categories and budgets from the API
        const fetchData = async () => {
            try {
                const categoryResponse = await fetch('/api/categories');
                const budgetResponse = await fetch('/api/budgets');
                const categoriesData = await categoryResponse.json();
                const budgetsData = await budgetResponse.json();

                setCategories(categoriesData);
                setBudgets(budgetsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleBudgetChange = (category, value) => {
        setBudgets({
            ...budgets,
            [category]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Submit the budgets to the API
        try {
            await fetch('/api/budgets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(budgets),
            });
            alert('Budgets updated successfully!');
        } catch (error) {
            console.error('Error updating budgets:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Category Budgets</h2>
            <form onSubmit={handleSubmit}>
                {categories.map((category) => (
                    <div key={category.id}>
                        <label>
                            {category.name}:
                            <input
                                type="number"
                                value={budgets[category.name] || ''}
                                onChange={(e) => handleBudgetChange(category.name, e.target.value)}
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Save Budgets</button>
            </form>
        </div>
    );
};

export default CategoryBudget;