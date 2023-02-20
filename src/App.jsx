import './App.css'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router'
import React, { useEffect } from 'react'
import { ACCESS_TOKEN, ROUTES_NAME, USER_LOGIN } from 'constant'
import AdminTemplate from './templates/AdminTemplates/AdminTemplate'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Films from './pages/Admin/Films/Films'
import ShowTimes from './pages/Admin/ShowTimes/ShowTimes'
import { loginService } from './services/baseService'
import AddNewFilm from './pages/Admin/Films/AddNewFilm/AddNewFilm'
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm'
import User from './pages/Admin/User/User'
import AddNewUser from './pages/Admin/User/addNewUser/AddNewUser'
import EditUser from './pages/Admin/User/editUser/EditUser'
import HomeTemplate from './templates/HomeTemplates/HomeTemplate'
import Home from './pages/Home/Home'
import HomeDetailFilm from './pages/Home/HomeDetailFilm/HomeDetailFilm'
import CheckOut from './pages/Home/CheckOut/CheckOut'

export const history = createBrowserHistory()

function App() {
  //! Đăng nhập sau khi load ứng dụng. Xóa sau
  useEffect(() => {
    const payload = {
      taiKhoan: 'phongthanh1',
      matKhau: '123123 '
    }

    loginService(payload).then((res) => {
      window.localStorage.setItem(ACCESS_TOKEN, res.content.accessToken)
      window.localStorage.setItem(USER_LOGIN, JSON.stringify(res.content))
    })
  }, [])

  return (
    <Router history={history}>
      <Switch>
        {/* Home */}
        <HomeTemplate path={ROUTES_NAME.HOME} exact component={Home} />
        <HomeTemplate path={ROUTES_NAME.FILM_DETAIL} exact component={HomeDetailFilm} />
        <HomeTemplate path={`${ROUTES_NAME.CHECKOUT}/:id`} exact component={CheckOut} />

        {/* ADmin */}
        <AdminTemplate path={ROUTES_NAME.ADMIN} exact component={Dashboard} />
        <AdminTemplate path={ROUTES_NAME.ADMIN_FILMS} exact component={Films} />
        <AdminTemplate path={ROUTES_NAME.ADMIN_USERS} exact component={User} />
        <AdminTemplate path={`${ROUTES_NAME.ADMIN_SHOWTIMES}/:idFilm`} exact component={ShowTimes} />
        <AdminTemplate path={ROUTES_NAME.ADMIN_ADD_NEW_FILM} exact component={AddNewFilm} />
        <AdminTemplate path={`${ROUTES_NAME.ADMIN_FILM_EDIT}/:id`} exact component={EditFilm} />

        <AdminTemplate path={ROUTES_NAME.ADMIN_ADD_NEW_USER} exact component={AddNewUser} />
        <AdminTemplate path={`${ROUTES_NAME.ADMIN_USERS_EDIT}/:id`} exact component={EditUser} />

      </Switch>
    </Router>
  )
}

export default App
