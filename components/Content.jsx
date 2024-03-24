const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  /* shift+alt+downArrow makes copy of the code selected */
  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click It</button>
      {/*note here we are not putting operators after handleClick. 
      Because if we put operators after the reference it will be called immediately like handleNameChange function */}
      <button
        onClick={() => {
          handleClick2("Dave");
        }}
      >
        Click It
      </button>

      {/*To pass a parameter to the function we need an anonymous function. 
      Here handleClick2 is not called immediately even after putting operators 
      after the reference because the reference is put inside an arrow function which is anonymous */}

      <button
        onClick={(e) => {
          handleClick3(e);

        }}
      >
        Click It
      </button>
    </main>
  );
};

export default Content;
