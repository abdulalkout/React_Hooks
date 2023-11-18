import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import UseContaxtDiv from "./components/UseContaxtDiv";
import { createContext, useState, useEffect, useReducer } from "react";

// reducer function to deside what to return
const reducer = (state, action) => {
  switch (action.type) {
    case "male":
      return {
        name: "Jhon",
        age: 20,
      };
    case "female":
      return {
        name: "Lili",
        age: 25,
      };
  }
};

// Initiate a new contaxt called counterContext
export const counterContext = createContext();

function App() {
  // Initiate a state for counter
  const [counter, setCounter] = useState(0);

  //Initiate a reducer pass reducer function and the state object
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    age: "",
  });

  // Whenever counter change do this function
  useEffect(() => {
    alert(`The counter changed so now it is ${counter}`);
  }, [counter]);

  return (
    <div className="App">
      {/* whatever goes inside the counterContext.Provider can access the value of [counter, setcounter] */}
      <counterContext.Provider value={[counter, setCounter]}>
        <UseContaxtDiv />
      </counterContext.Provider>

      {/* Displaying the name of the state object */}
      <h5>{state.name}</h5>
      {/* using dispatch function to send the type of name to display the name of the state object */}
      {/* Displaying the age of the state object */}
      <h5>{state.age}</h5>
      <button
        onClick={() => {
          dispatch({ type: "male" });
        }}
      >
        male
      </button>

      {/* using dispatch function to send the type of age to display the age of the state object */}
      <button
        onClick={() => {
          dispatch({ type: "female" });
        }}
      >
        female
      </button>
    </div>
  );
}

export default App;
