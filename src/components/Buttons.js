const Buttons = (props) => {
  return (
    <>
      <button onClick={props.changeDino}>Research New Species</button>
      <button onClick={props.addDino}>Add Dinosaur To Park</button>
      <button onClick={props.handleReset}>
        Destroy Park (some things were not meant to be)
      </button>
    </>
  );
};

export default Buttons;
