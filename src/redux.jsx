import React from "react";
import "./redux.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionExample } from "../redux/store.js";

function Redux(){
  const dispatch = useDispatch();
  const currentState = useSelector(state => state);

  return (
    <div>
      <button onClick={() => dispatch(actionExample())}></button>
      {currentState}
    </div>
  );
}

export default Redux;