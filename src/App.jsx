import './App.css'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router'
import React, { useEffect } from 'react'
import AdminTemplate from './templates/AdminTemplates/AdminTemplate'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Films from './pages/Admin/Films/Films'
import ShowTimes from './pages/Admin/ShowTimes/ShowTimes'
import { loginService } from './services/baseService'
import { ACCESS_TOKEN, USER_LOGIN } from './utils/settings'
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
        <HomeTemplate path="/home" exact component={Home} />
        <HomeTemplate path="/film-detail" exact component={HomeDetailFilm} />
        <HomeTemplate path="/checkout/:id" exact component={CheckOut} />

        {/* ADmin */}
        <AdminTemplate path="/admin" exact component={Dashboard} />
        <AdminTemplate path="/admin/films" exact component={Films} />
        <AdminTemplate path="/admin/users" exact component={User} />
        <AdminTemplate path="/admin/showtimes/:idFilm" exact component={ShowTimes} />
        <AdminTemplate path="/admin/films/add-new-film" exact component={AddNewFilm} />
        <AdminTemplate path="/admin/films/edit/:id" exact component={EditFilm} />

        <AdminTemplate path="/admin/users/add-new-user" exact component={AddNewUser} />
        <AdminTemplate path="/admin/users/edit-user/:id" exact component={EditUser} />

      </Switch>
    </Router>
  )
}

export default App
