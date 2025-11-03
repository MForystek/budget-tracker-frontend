import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from './services/api';

import './App.css';

function HomePage() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Budget tracker</h1>
      <div className="card">
        <label>Your money: {count}</label>
        <br/><br/>
        <button onClick={() => setCount((count) => count + 1)}>
          Make money by clicking here!
        </button>
        <br/><br/>
        <button onClick={() => setCount(0)}>
          Go bankrupt!
        </button>
      </div>
    </>
  );
}

function TransactionsPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>("Loading...");
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    api.get("/transactions")
      .then(res => {
        setTransactions(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoadingMessage("Failed to fetch transactions.")
      });
  }, []);

  return (
    <>
      <h2>Transactions</h2>
      <div>
        {loading ? (
          <div>{loadingMessage}</div>
        ) : (
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Payemnt method</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Category</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{transaction.date}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{transaction.amount.toFixed(2)} zł</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{transaction.paymentMethod}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{transaction.description}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{transaction.category.name}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{transaction.category.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

function IncomesPage() {
  return <h2>Incomes</h2>
}

function ExpensesPage() {
  return <h2>Expenses</h2>
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/transactions">Transactions</Link> | <Link to="/incomes">Incomes</Link> | <Link to="/expenses">Expenses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/incomes" element={<IncomesPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </Router>
  );
}

export default App
