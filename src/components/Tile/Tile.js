import './Tile.css'

const Tile = (props) => {
  let elem = <div></div>;

  let img = '';
  if(props.pieceImage){
    img = <img className="piece" src={props.pieceImage} alt="Chess piece" />;
  }

  if (props.coordinate === "a8") {
    elem = <div className={"tile " + 
      (props.isDark ? "dark" : "light") + 
      " top-left-rounded" + 
      (img ? " has-piece" : "")}>{img}</div>;
  } 
  else if (props.coordinate === "h8") {
    elem = <div className={"tile " + 
      (props.isDark ? "dark" : "light") + 
      " top-right-rounded" + 
      (img ? " has-piece" : "")}>{img}</div>;
  }
  else if (props.coordinate === "a1") {
    elem = <div className={"tile " + 
      (props.isDark ? "dark" : "light") + 
      " bottom-left-rounded" + 
      (img ? " has-piece" : "")}>{img}</div>
  }
  else if (props.coordinate === "h1") {
    elem = <div className={"tile " + 
      (props.isDark ? "dark" : "light") + 
      " bottom-right-rounded" + 
      (img ? " has-piece" : "")}>{img}</div>
  } 
  else {
    elem = <div className={"tile " + 
      (props.isDark ? "dark" : "light") + 
      (img ? " has-piece" : "")}>{img}</div>
  }

  return elem;
}

export default Tile
