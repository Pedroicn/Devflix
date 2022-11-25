import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route to='/' element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
