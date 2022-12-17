import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import Care from '../Pages/care';
import { Fitness } from '../Pages/Fitness';
 
import {Home} from "../Pages/Home/Home";
import Mind from '../Pages/mind';
import { Store } from '../Pages/Store';
import TestSinglePage from '../Pages/testSinglePage';

export const Allroutes = () => {
  return (
    <div>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/fitness" element={<Fitness/>}/>
          <Route path="/care" element={<Care/>}/>
          <Route path="/mind" element={<Mind/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/details/:id" element={<TestSinglePage/>}/>
      </Routes>

    </div>
  )
}
