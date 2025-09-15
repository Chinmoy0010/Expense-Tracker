# Personal Budget Tracker Backend

## Overview
The Personal Budget Tracker is a web application designed to help users manage their finances effectively. This backend serves as the API for the application, providing endpoints for financial entry logging, category-based budgeting, data visualization, financial summaries, user authentication, and group expense management.

## Features
- **Financial Entry Logging**: Users can log their income and expenses.
- **Category-Based Budgeting**: Users can set budgets for different categories and track their spending.
- **Data Visualization**: Visual representations of financial data to help users understand their financial situation.
- **Financial Summaries**: Summarized views of income, expenses, and remaining budgets.
- **User Authentication**: Secure login and registration for users.
- **Group Expense Management**: Features to manage and split expenses among groups.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building the API.
- **SQLite/PostgreSQL**: Database for storing user data and financial records.
- **JWT**: For user authentication and session management.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-budget-tracker/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database:
   - Update the database configuration in `src/db/index.js` to use either SQLite or PostgreSQL.

4. Start the server:
   ```
   npm start
   ```

5. API Documentation:
   - Refer to the routes defined in `src/routes/index.js` for available endpoints and their usage.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.