export const tileService = {
  getTileRoundedClass(coordinate){
    if (coordinate === "a8") {
      return "top-left-rounded";
    } 
    else if (coordinate === "h8") {
      return "top-right-rounded";
    }
    else if (coordinate === "a1") {
      return "bottom-left-rounded";
    }
    else if (coordinate === "h1") {
      return "bottom-right-rounded";
    } 
    else {
      return "";
    }
  }
}