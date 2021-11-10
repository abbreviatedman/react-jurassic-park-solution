import DinoCard from "./DinoCard";

const DinoGrid = (props) => {
  const dinosToDisplay = props.dinos.map((dino, i) => {
    return <DinoCard key={i} dino={dino} />;
  });

  return <div className="dino-grid">{dinosToDisplay}</div>;
};

export default DinoGrid;
