import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import Care from '../pages/care';
import { Fitness } from '../pages/Fitness';
 
import {Home} from "../pages/Home/Home";
import Mind from '../pages/mind';
import { Store } from '../pages/Store';
import TestSinglePage from '../pages/testSinglePage';

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
