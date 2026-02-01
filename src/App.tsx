import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './components/home';
import { TransactionsPage, IncomesPage, ExpensesPage } from './components/transactions/transactions';

import './App.css';
import TransactionsAdding from './components/transactions/transactionsAdding';

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/transactions">Transactions</Link> | <Link to="/incomes">Incomes</Link> | <Link to="/expenses">Expenses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path='/transactions/add' element={<TransactionsAdding />} />
        <Route path="/incomes" element={<IncomesPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </Router>
  );
}
