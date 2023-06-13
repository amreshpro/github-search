import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Error404 from "./components/pages/Error404";




const App = () => {
  return (
       <div className="  bg-gradient-to-b from-primary-100   flex flex-col gap-12 justify-center items-center ">
      <BrowserRouter>
        <Routes>
          <Route
          exact

            path="/"
            element={
                  <Dashboard />
            }
          />
      
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
};
export default App;
