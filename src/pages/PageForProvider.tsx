import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const PageForProvider = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div className="useContextExample">
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        Change Theme
      </button>
      <button
        onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload: 20 })}
      >
        Change Font Size
      </button>
    </div>
  );
};

export default PageForProvider;

//! The problem that caused us to split the actiontype into two types is that on line 12 we only need to use the type property, and on line 13 we need to use the type and playload properties
