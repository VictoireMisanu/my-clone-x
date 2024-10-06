//import { useState } from 'react'

import MiddleSection from "./components/MiddleSection/MiddleSection"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProfileInfo from "./components/Pages/ProfileInfo"
import SideNav from "./components/SideNav/SideNav"
import RightSide from "./components/RightSide/RightSide"

function App() {

  return (
    
  <BrowserRouter>
    <div className="bg-Bg1 flex flex-row justify-center">
        <SideNav className="mx-10 flex flex-col gap-10 mb-3"/>
        <Routes>
            <Route path="/">
              <Route index element={
                  <MiddleSection className="w-5/12 mx-3 border-r-[1px] border-l-[1px] border-slate-700"/>
              }/>
            </Route>
          <Route path="/:username" element={
            <ProfileInfo className="md:lg:w-5/12 mx-3 border-r-[1px] border-l-[1px] border-slate-700"/>} />
        </Routes>
        <RightSide/>
    </div>
  </BrowserRouter>
    
  
  )
}

export default App
