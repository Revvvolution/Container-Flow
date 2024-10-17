import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Home/Dashboard.jsx";
import { TagList } from "./Tag/TagList.jsx";
import { TagCreate } from "./Tag/TagCreate.jsx";
import { TagEdit } from "./Tag/TagEdit.jsx";
import { ItemList } from "./Item/ItemList.jsx";
import { ItemCreate } from "./Item/ItemCreate.jsx";
import { ItemEdit } from "./Item/ItemEdit.jsx";
import { ContainerList } from "./Container/ContainerList.jsx";


export default function ApplicationViews() {
  
   return(
        <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/tags/:id" element={<TagList />} />

            <Route path="/tags/new/:id" element={<TagCreate />} />
            
            <Route path="/tags/edit/:id" element={<TagEdit />} />

            <Route path="/items/:id" element={<ItemList />} />

            <Route path="/items/new/:id" element={<ItemCreate />} />
            
            <Route path="/items/edit/:id" element={<ItemEdit />} />

            <Route path="/containers/:id" element={<ContainerList />} />

            <Route path="*" element={<p>Whoops, nothing here...</p>} />

        </Routes>
   );
 
}