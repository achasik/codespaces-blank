// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import { Link } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Container, CssBaseline } from "@mui/material";
import useSWR from "swr";
import { GET } from "./api/fetcher";
import { User } from "./models/User";
import { createContext } from "react";

const UserContext = createContext<User>({ id: 0, displayName: "Гость" });
function App() {
  const { data: user, error, isLoading } = useSWR<User>("/user", GET);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return null;
  return (
    <>
      <CssBaseline />
      <UserContext.Provider value={user}>
        <Container maxWidth={false} disableGutters>
          <BrowserRouter basename="/new">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="*"
                Component={() => {
                  return (
                    <div>Path {window.location.pathname + " not found"}</div>
                  );
                }}
              />
            </Routes>
            {/* <Footer /> */}
          </BrowserRouter>
          <div>{`${user.id} ${user.displayName}`}</div>
        </Container>
      </UserContext.Provider>
    </>
  );
  //   const [count, setCount] = useState(0)

  //   return (
  //       <div>
  // {/*

  //         <a href="https://vitejs.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card"> */}
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         {/* <p>
  //           Edit <code>src/App.tsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p> */}
  //       <br/>
  //       <a href="..">Up</a>
  //     </div>
  //   )
}

export default App;
