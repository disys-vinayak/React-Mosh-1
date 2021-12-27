import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Counter from "./components/counter";

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
