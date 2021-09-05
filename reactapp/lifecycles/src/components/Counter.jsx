import React, { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Fehmi");

  useEffect(() => {
    console.log("componunt mount edildi");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("number  state gümcellemdi");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>arttırasdasdasd</button>
    </div>
  );
}

export default Counter;
