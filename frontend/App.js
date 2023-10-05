import { Provider, useDispatch } from "react-redux";
import AppRouter from "./src/AppRouter";
import { store } from "./src/store/store";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <StatusBar hidden />
    </Provider>
  );
}
