import "./App.css";
import Keyboard from "./components/Keyboard";
import MainScreen from "./components/MainScreen";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <TopBar />
        <MainScreen />
        <Keyboard/>
      </Provider>
    </div>
  );
}

export default App;
