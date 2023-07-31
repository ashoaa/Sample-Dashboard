import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }
  return false;
};
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

ReactDOM.createRoot(document.getElementById("root")).render(
  <DndProvider backend={backendForDND}>
    <Provider store={store}>
      <App />
    </Provider>
  </DndProvider>
);
