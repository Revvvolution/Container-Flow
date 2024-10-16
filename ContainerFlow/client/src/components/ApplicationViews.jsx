import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Home/Dashboard.jsx";
import { TagList } from "./Tag/TagList.jsx";
import { TagCreate } from "./Tag/TagCreate.jsx";


export default function ApplicationViews() {
  
   return(
        <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/tags/:id" element={<TagList />} />

            <Route path="/tags/new/:id" element={<TagCreate />} />

            <Route path="*" element={<p>Whoops, nothing here...</p>} />

        </Routes>
   );
 
}