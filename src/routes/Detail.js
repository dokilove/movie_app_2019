import React from "react";
import { useLocation, useHistory } from "react-router-dom";

function Detail() {
  let location = useLocation();
  if (location.state) {
    return <h1>{location.state.title}</h1>;
  } else {
    return null;
  }
}

export default Detail;
