import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // let { inc, exp } = transactions.reduce(
  //   (acc, { amount }) => {
  //     if (amount < 0) {
  //       return { ...acc, exp: acc.exp + amount };
  //     } else {
  //       return { ...acc, inc: acc.inc + amount };
  //     }
  //   },
  //   {
  //     inc: 0,
  //     exp: 0
  //   }
  // );

  let { inc, exp } = transactions.reduce(
    ({ inc, exp }, { amount }) =>
      amount < 0 ? { inc, exp: exp + amount } : { exp, inc: inc + amount },
    {
      inc: 0,
      exp: 0
    }
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${Math.abs(inc.toFixed(2))}
        </p>
      </div>
      <div>
        <h4>Income</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(exp.toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
