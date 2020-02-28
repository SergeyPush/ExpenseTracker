import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <>
      <h4>Your balance</h4>
      <h1 id="balance">{balance.toFixed(2)}$</h1>
    </>
  );
};

export default Balance;
