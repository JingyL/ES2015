import './App.css';
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes></Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
