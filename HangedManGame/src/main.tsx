import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GameContextProvider from "./store/game-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
