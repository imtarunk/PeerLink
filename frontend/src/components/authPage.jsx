import poster from '../assets/PeerLinkpost.jpg'
import React from 'react'
import Footer from './footer'
import { Link, Outlet } from "react-router-dom"

const AuthPage = () => {
  return (
    <center>
      <div className="flex flex-row justify-center items-center h-[90vh]">
        <div class="ml-[10%] p-10">
          <img src={poster} alt="peerLink-Poster" />
        </div>
        <div >
          <Outlet />
        </div>
      </div>
      <Footer />
    </center>

  )
}

export default AuthPage