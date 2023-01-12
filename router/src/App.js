import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { users } from "./util/data";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginCheck(userName, password) {
    if (users.map((user) => user.username == userName && user.password == password)) {
      setIsLoggedIn(true);
      console.log("logged in");
    } else {
      console.log("not logged in");
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={isLoggedIn ? <About /> : <Login loginState={loginCheck} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
