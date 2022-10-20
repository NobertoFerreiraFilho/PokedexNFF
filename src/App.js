import { React } from "react";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import { GlobalStyle } from "./GlobalStyle";
//components
import Home from "./Pages/Home";
import PokeDetails from "./Pages/PokeDetails";


const theme = {
  colors: {
    
  },
  mobile:{
    firstBreakPoint: '1000px',
    secondBreakPoint: '768px',
    thirdBreakPoint: '600px',
  }
}



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:pokeId" element={<PokeDetails />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
          </main>
        }
      />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
