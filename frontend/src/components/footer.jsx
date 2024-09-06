import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">© 2024 codextarun</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-3xl mr-10">
          <li class="ms-3">
            <a class="text-body-secondary" href="https://www.instagram.com/codexkalii/">
              <FaInstagram />
            </a>
          </li>
          <li class="ms-3"><a class="text-body-secondary" href="https://imtarunk.github.io/tarunksaini-portfolio/">
            <CiGlobe />
          </a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="https://github.com/imtarunk">
              <FaGithub />
            </a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer