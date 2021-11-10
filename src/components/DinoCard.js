function DinoCard(props) {
  return (
    <div className="dino-card">
      <div>Dinosaur: {props.dino.name}</div>
      <img src={props.dino.image} alt="dino" />
    </div>
  );
}

export default DinoCard;
