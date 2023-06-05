import React, { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0.00);
  const [error, setError] = useState("")

  function handleDateChange(e) {
    setDate(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }

  function handleAmountChange(e) {
    setAmount(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    setError("")
    if (amount.length !== 0 && date.length !== 0 && description.length !== 0 && category.length !== 0) {
      const newTransactionData = {
        date: date,
        description: description,
        category: category,
        amount: amount
      };
      fetch(
        "http://localhost:8001/transactions",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/Json",
          },
          body: JSON.stringify(newTransactionData)
        }
      )
        .then(res => res.json())
        .then(data => {
          setAmount(0.00);
          setCategory("");
          setDate("");
          setDescription("");
        })

      console.log(newTransactionData)
    } else {
      setError("Please fill in all the fields")
    }
  }

  return (
    <div className="ui segment">
      {error.length > 0 ? <span style={{ color: "red", margin: "10px 0" }}>{error}</span> : ""}
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onChange={handleDateChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleDescriptionChange} />
          <input type="text" name="category" placeholder="Category" onChange={handleCategoryChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleAmountChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;