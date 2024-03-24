import { useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Dave"); /* array destructuring */
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  /*   name="abcd" ->this will give error "Uncaught TypeError: Assignment to constant variable."
     Because the name is assigned as a constant/const so we cannot modify it directly, we always use setName to change the name*/

  /* shift+alt+downArrow makes copy of the code selected */
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    /* The value of count will be what initially brought to the function. 
    The value changes only at the time of re-renders*/

    /* The current value of the fucntion comes into the state and we don't alter that  */
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Check Count</button>
      <button onClick={handleClick2}>Check Count Again</button>
    </main>
  );
};

export default Content;
