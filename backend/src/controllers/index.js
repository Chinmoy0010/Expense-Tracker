import { createEntry, getEntries, updateEntry, deleteEntry } from '../models/entryModel';
import { createBudget, getBudgets, updateBudget, deleteBudget } from '../models/budgetModel';
import { registerUser, loginUser, getUser } from '../models/userModel';

export const logFinancialEntry = async (req, res) => {
    try {
        const entry = await createEntry(req.body);
        res.status(201).json(entry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const fetchFinancialEntries = async (req, res) => {
    try {
        const entries = await getEntries();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const modifyFinancialEntry = async (req, res) => {
    try {
        const updatedEntry = await updateEntry(req.params.id, req.body);
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeFinancialEntry = async (req, res) => {
    try {
        await deleteEntry(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createNewBudget = async (req, res) => {
    try {
        const budget = await createBudget(req.body);
        res.status(201).json(budget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const fetchBudgets = async (req, res) => {
    try {
        const budgets = await getBudgets();
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const modifyBudget = async (req, res) => {
    try {
        const updatedBudget = await updateBudget(req.params.id, req.body);
        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeBudget = async (req, res) => {
    try {
        await deleteBudget(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const registerNewUser = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUserHandler = async (req, res) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserDetails = async (req, res) => {
    try {
        const user = await getUser(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};