import react from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot ( document.getElementById ( "root" ) )
root.render ( <BrowserRouter>
    <App/>
</BrowserRouter> );
