import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Home/Dashboard.jsx";


export default function ApplicationViews() {
  
   return(
        <Routes>
            <Route path="/home" element={<Dashboard />} />
        </Routes>
   );
 
}