import "./App.css";
// import { Home } from './Pages';
import { RouterProvider } from "react-router-dom";
import { _ROUTER } from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={_ROUTER} />
    </div>
  );
}

export default App;
