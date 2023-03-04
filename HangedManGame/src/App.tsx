import "./App.css";
import Keyboard from "./components/Keyboard";
import MainScreen from "./components/MainScreen";
import TopBar from "./components/TopBar";
import Modal from "./components/Modal";
import { useAppSelector } from "./hooks/storeHooks";

function App() {
  const {isModalOpen, content} = useAppSelector((state) => state.modal)

  console.log(isModalOpen);

  return (
    <div className="App">
       {isModalOpen && <Modal modalOption={content} />}
        <TopBar />
        <MainScreen />
        <Keyboard/>
    </div>
  );
}

export default App;
