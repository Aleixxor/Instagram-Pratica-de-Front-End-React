import React from "react";
import Header from "./components/Header";
import Routes from "./routes";
import BottomNavBar from "./components/BottomNavBar";

import "./styles.css";

const App = () => (
  <div className="App">
    <Routes></Routes>
    <BottomNavBar></BottomNavBar>
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

export default App;
