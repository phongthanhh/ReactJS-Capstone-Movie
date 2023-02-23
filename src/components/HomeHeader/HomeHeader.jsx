import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeHeader.css'
import { useSelector } from 'react-redux'
import { history } from 'App'
import { ROUTES_NAME } from 'constant'
import logo from '../../assets/img/logo.png'
import userImg from '../../assets/img/user.png'

function HomeHeader() {
  const { userLogin } = useSelector((state) => state.userManageReducer)

  return (
    <div
      className="header"
    >
      <header
        className="d-flex"
        style={{
          width: '90%', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto'
        }}
      >
        <NavLink to="/">
          <img src={logo} style={{ width: '50px' }} alt="" />
          {' '}
        </NavLink>
        <nav className="d-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ul className="d-flex m-0">
            <li>
              <NavLink style={{ padding: '20px 30px', textDecoration: 'none' }} to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink style={{ padding: '20px 30px', textDecoration: 'none' }} to={ROUTES_NAME.ADMIN}>ADMIN</NavLink>
            </li>
          </ul>

          {userLogin == null ? (
            <div className="d-flex">
              <button
                onClick={() => {
                  history.push(ROUTES_NAME.LOGIN)
                }}
                type="button"
                className="btn btn-danger mr-3"
              >
                SIGN IN

              </button>
            </div>
          ) : (
            <div
              className="d-flex"
              style={{
                color: '#fff', justifyContent: 'center', alignItems: 'center'
              }}
            >
              <span><img style={{ width: '60px', cursor: 'pointer' }} src={userImg} alt="" /></span>
              <span style={{
                fontWeight: 'bold', fontSize: '1em'
              }}
              >
                {' '}
                {userLogin.hoTen || ''}
              </span>
            </div>
          )}
        </nav>
      </header>
    </div>

  )
}

export default HomeHeader
