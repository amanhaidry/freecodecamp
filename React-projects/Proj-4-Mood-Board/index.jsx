export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  const items = [
    {
      color: "#006494",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Pathways",
    },
    {
      color: "#03254E",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Shore",
    },
    {
      color: "#702632",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Grass",
    },
    {
      color: "#232C33",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Santorini",
    },
    {
      color: "#8CB369",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Ship",
    },
    {
      color: "#436436",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Pigeon",
    },
  ];
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {items.map((item, idx) => {
          return <MoodBoardItem key={item.color + idx} {...item} />;
        })}
      </div>
    </div>
  );
};
