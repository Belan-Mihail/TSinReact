import React, { createContext, useReducer } from "react";

// type for state in reducer
type StateType = {
  theme: string;
  fontSize: number;
};


// type for action in reducer
// !we comment and add two separeted type (below) due the problems in PageForProvider (12-13)
// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload: number;
// };
type ColorActionType = {
    type: "CHANGE_THEME";
  };
  type FontActionType = {
    type: "CHANGE_FONTSIZE";
    payload: number;
  };

type ActionType = ColorActionType | FontActionType

//initial state for context
const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

//create context
export const ThemeContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

//reducer
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "CHANGE_FONTSIZE":
      return {
        ...state,
        fontSize: action.payload,
      };
    default:
      return state;
  }
};

//themeprovider (use in app.tsx)
export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}