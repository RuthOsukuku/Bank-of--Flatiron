import React from "react";

function Search({searchTransactions}) {
  
  function handleSearchChange(e){
    console.log("Searching...")
    searchTransactions(e.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;