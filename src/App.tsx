// import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/pageNotFound";
import MainPage from "./pages/mainPage";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard";
import ProtectedLayout from "./pages/protectedLayout";
function App() {
  return (
    <>
      <MainPage/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Protected routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
