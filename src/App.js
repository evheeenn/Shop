import { useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/actions";
import ShoppingCart from "./components/Shopping Cart";
function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getUserThunk(user));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
