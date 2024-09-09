//import { useState } from 'react'


import Twitter from "./components/SideNav/LogoTwitter/Twitter"
import NavComponent from "./components/SideNav/NavComponent/NavComponent"
import SideNav from "./components/SideNav/SideNav"



function App() {

  return (
    <>
      <SideNav>
          <Twitter/>
          <NavComponent/>
      </SideNav>
    </>
  )
}

export default App
