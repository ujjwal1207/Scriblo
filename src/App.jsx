import { useState, useEffect, use } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import authservice from "./appwrite/auth";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "./components";
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userData: userdata }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block ">
        <Header />
        <main>
          <Outlet></Outlet>
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
