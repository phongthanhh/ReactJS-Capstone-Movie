import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import AdminTemplate from './templates/AdminTemplates/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import ShowTimes from './pages/Admin/ShowTimes/ShowTimes';
import { useEffect } from 'react';
import axios from 'axios';
import { loginService } from './services/baseService';
import { ACCESS_TOKEN, USER_LOGIN } from './util/settings';
import Home from './pages/Home/Home';
import AddNewFilm from './pages/Admin/Films/AddNewFilm/AddNewFilm';
import EditFilm from './pages/Admin/Films/EditFilm/EditFilm';
import User from './pages/Admin/User/User';
import AddNewUser from './pages/Admin/User/addNewUser/AddNewUser';
import EditUser from './pages/Admin/User/editUser/EditUser';



export const history = createBrowserHistory()

function App() {

  //! Đăng nhập sau khi load ứng dụng. Xóa sau
  useEffect(() => {
    const payload = {
      "taiKhoan": "1string11",
      "matKhau": "123789456 "
    };

    loginService(payload).then((res) => {
      window.localStorage.setItem(ACCESS_TOKEN, res.content.accessToken)
      window.localStorage.setItem(USER_LOGIN, JSON.stringify(res.content))
    })
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Home path='/' exact component={Home} />

        {/* ADmin */}
        <AdminTemplate path='/admin' exact component={Dashboard} />
        <AdminTemplate path='/admin/films' exact component={Films} />
        <AdminTemplate path='/admin/users' exact component={User} />
        <AdminTemplate path='/admin/showtimes' exact component={ShowTimes} />
        <AdminTemplate path='/admin/films/add-new-film' exact component={AddNewFilm} />
        <AdminTemplate path='/admin/films/edit/:id' exact component={EditFilm} />

        <AdminTemplate path='/admin/users/add-new-user' exact component={AddNewUser} />
        <AdminTemplate path='/admin/users/edit-user/:id' exact component={EditUser} />

      </Switch>
    </Router>
  );
}

export default App;
