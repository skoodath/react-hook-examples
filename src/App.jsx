import axios from "axios";
import { useEffect, useReducer } from "react";
import "./styles.css";
import { initialState, reducer } from "./reducer";
import DataContext from "./context";
import EmailComponent from "./components/Email";
import ErrorComponent from "./components/Error";
import LoaderComponent from "./components/Loader";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, users, error } = state;

  let apiURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });

    return () => {
      console.log("lifecycle ends");
    };
  }, [apiURL]);
  return (
    <DataContext.Provider value={{ users }}>
      <div className="App">
        <h1>Employees</h1>
        {loading && <LoaderComponent message={"Fetching Data...!"} />}
        {error && <ErrorComponent message={"Data was not fetched"} />}
        <EmailComponent />
      </div>
    </DataContext.Provider>
  );
}
