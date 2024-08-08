import "./App.css";
import { AppProviders } from "./AppProviders";
import AppRouter from "./AppRouter";

function App() {
  return (
    <AppProviders>
      <AppRouter/>
      {/* <BrowserRouter basename="/new">
        <Layout />
      </BrowserRouter> */}
      {/* <div>{`${user.id} ${user.displayName}`}</div> */}
    </AppProviders>
  );
}

export default App;
