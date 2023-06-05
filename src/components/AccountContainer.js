import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [transactions2Show, setTransactions2Show] = useState([])

  function searchTransactions(searchTerm) {
    const allTransactions = transactions
    if (searchTerm == "") {
      setTransactions2Show(allTransactions)
    } else {
      const foundTransactions = allTransactions.filter(transaction => transaction.description.includes(searchTerm))
      setTransactions2Show(foundTransactions)
    }
  }

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        setTransactions(transactions);
        setTransactions2Show(transactions)
      })
  }, [])

  return (
    <div>
      <Search searchTransactions={searchTransactions} />
      <AddTransactionForm />
      <TransactionsList
        transactionList={transactions2Show}
      />
    </div>
  );
}

export default AccountContainer;