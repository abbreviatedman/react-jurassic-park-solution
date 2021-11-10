const ParkStatus = (props) => {
  return (
    <>
      <div>Current dinosaur species: {props.currentBreed}</div>
      <div>Number of dinosaurs in park: {props.numberOfDinos}</div>
    </>
  );
};

export default ParkStatus;
