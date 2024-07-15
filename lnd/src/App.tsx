// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Link } from "react-router-dom";

import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  //const navigate = useNavigate();
  // function LevelUp() {
  //   // Since Contact is not a parent of EditContact we need to go up one level
  //   // in the path, instead of one level in the Route hierarchy
  //   navigate("..", { relative: "path" });
  // }
  return (
    <>
      <HashRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:URLSlug" element={<Article />} />
          <Route path="/editor" element={<NewArticle />} />
          <Route path="/editor/:URLSlug" element={<EditArticle />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile/:userId/*" element={<Profile />} /> */}
          <Route path="*" element={<Navigate to={new URL("..", window.origin + location.pathname)} replace={true}/>} />

        </Routes>
        {/* <Footer /> */}
      </HashRouter>
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


export default App
