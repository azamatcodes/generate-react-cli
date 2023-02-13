import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "./counterSlice";

export const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [incrementAsyncAmount, setIncrementAsyncAmount] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment())
  }

  const decrementCount = () => {
    if (count > 0) {
      dispatch(decrement())
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
    setIncrementAmount((prevState) => 0);
  };

  const handleAsyncSubmit = (event) => {
    event.preventDefault();
    dispatch(incrementAsync(Number(incrementAsyncAmount) || 0));
    setTimeout(() => {
      setIncrementAsyncAmount((prevState) => 0);
    }, 1000)
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={incrementCount}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={decrementCount}
        >
          Decrement
        </button>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            aria-label="Set increment amount"
            type="text"
            value={incrementAmount}
            onChange={(event) => setIncrementAmount(event.target.value)}
          />
          <button type="submit">Add Amount</button>
        </form>
      </div>

      <div>
        <form onSubmit={handleAsyncSubmit}>
          <input
            aria-label="Set increment async amount"
            type="text"
            value={incrementAsyncAmount}
            onChange={(event) => setIncrementAsyncAmount(event.target.value)}
          />
          <button type="submit">Add Async</button>
        </form>
      </div>
    </div>
  );
};
