import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
