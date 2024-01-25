

import { useReducer, useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer position="top-right" autoClose={2000} theme="dark" hideProgressBar={true}  />
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
