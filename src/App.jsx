import './App.css'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router'
import React from 'react'
import { ROUTES_NAME } from 'constant'
import Loading from 'components/loading/loading'
import Login from 'pages/Home/Login/Login'
import Register from 'pages/Home/Register/Register'
import { ToastContainer } from 'react-toastify'
import AdminTemplate from './templates/AdminTemplates/AdminTemplate'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Films from './pages/Admin/Films/Films'
import ShowTimes from './pages/Admin/ShowTimes/ShowTimes'
import AddNewFilm from './pages/Admin/Films/AddNewFilm/AddNewFilm'
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm'
import User from './pages/Admin/User/User'
import AddNewUser from './pages/Admin/User/addNewUser/AddNewUser'
import EditUser from './pages/Admin/User/editUser/EditUser'
import HomeTemplate from './templates/HomeTemplates/HomeTemplate'
import Home from './pages/Home/Home'
import HomeDetailFilm from './pages/Home/HomeDetailFilm/HomeDetailFilm'
import CheckOut from './pages/Home/CheckOut/CheckOut'

// Toastify
import 'react-toastify/dist/ReactToastify.css'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Loading />
      <Switch>
        {/* Home */}
        <HomeTemplate path={ROUTES_NAME.HOME} exact component={Home} />
        <HomeTemplate path={`${ROUTES_NAME.FILM_DETAIL}/:id`} exact component={HomeDetailFilm} />
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

        {/* Login */}
        <Login path={ROUTES_NAME.LOGIN} exact component={Login} />
        <Register path={ROUTES_NAME.REGISTER} exact component={Login} />

        <HomeTemplate path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
