import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";
import store from "./redux/store";
import { Provider } from "react-redux";
import DeliveryInfo from "./pages/animals/components/DeliveryInfo";
import PayWith from "./pages/animals/components/PayWith";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToastContainer />
        <AppRoutes />
      </Provider>
      {/* <Routes>
        <Route></Route>
      </Routes> */}
    </div>
  );
}

export default App;
