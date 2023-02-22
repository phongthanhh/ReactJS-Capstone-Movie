/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../asset/img/logo.png'

export default function TieuDe() {
  return (
    <div style={{ background: 'url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-top.png)' }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/home">
          <img src={logo} alt="abc" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tin tức</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-dark mr-3">Đăng ký</button>
        <button type="button" className="btn btn-dark">Đăng nhập</button>
      </nav>

    </div>

  )
}
