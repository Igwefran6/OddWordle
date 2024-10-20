import AppRouterProvider from "./router/router";
import { AppContext } from "./store/AppContext";

function App() {
  return (
    <>
      <AppContext>
        {" "}
        <AppRouterProvider />
      </AppContext>
    </>
  );
}

export default App;
