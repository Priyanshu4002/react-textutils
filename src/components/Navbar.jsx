import React from 'react'

export default function Navbar(props) {
  return (
    //${anything} can be used to declare or use variable within the html
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          </ul>
      
      {/* ternary operator is used to reverse the condition of enabling the dark mode */}
    <div class={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
         <input className="form-check-input my-1 " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDark} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
