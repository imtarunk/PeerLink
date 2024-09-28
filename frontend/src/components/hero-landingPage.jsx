import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import landingimg from '../assets/landingpage.png'
import { Link } from 'react-router-dom';
import Footer from './footer'

const LandingPage = () => {
  return (
    <div class="px-4 pt-5 my-5 text-center border-bottom flex-row justify-center items-center m-0 p-0">
      <h1 class="display-4 fw-bold text-body-emphasis">PeerLink</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">PeerLink is a dynamic social media platform crafted by codextarun, designed exclusively for college students to interact, connect, and share their unique campus experiences. It serves as a vibrant space for students to document their journey, engage in discussions, and build a sense of community around shared interests, activities, and events. With PeerLink, students can share stories, exchange ideas, and collaborate, all within an environment tailor-made for celebrating the ups and downs of college life.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to={"/signup"}>
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Join now</button></Link>
          <Link to={"/login"}>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Login</button></Link>
        </div>
      </div>
      <div class="overflow-hidden max-height: 30vh flex items-center justify-center">
        <div class=" px-5">
          <img src={landingimg} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage