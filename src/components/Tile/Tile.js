import './Tile.css'

const Tile = (props) => {
  if (props.coordinate === "a8") {
    return (
      <div className={"tile " + (props.isColored ? "colored" : "uncolored") + " top-left-rounded"}></div>
    );
  } 
  else if (props.coordinate === "h8") {
    return (
      <div className={"tile " + (props.isColored ? "colored" : "uncolored") + " top-right-rounded"}></div>
    );
  }
  else if (props.coordinate === "a1") {
    return (
      <div className={"tile " + (props.isColored ? "colored" : "uncolored") + " bottom-left-rounded"}></div>
    );
  }
  else if (props.coordinate === "h1") {
    return (
      <div className={"tile " + (props.isColored ? "colored" : "uncolored") + " bottom-right-rounded"}></div>
    );
  } 
  else {
    return (
      <div className={"tile " + (props.isColored ? "colored" : "uncolored")}></div>
    );
  }
}

export default Tile
