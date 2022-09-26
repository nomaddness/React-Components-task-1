import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);

    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handle reset");
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
       counter.value += 1 
      }
      return counter
    })
    setCounters(newCounters);
    console.log("handle increment");
  };
  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id && counter.value > 0) {
       counter.value -= 1 
      }
      return counter
    })
    setCounters(newCounters);
    console.log("handle increment");
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        SBROS
      </button>
    </>
  );
};

export default CountersList;
