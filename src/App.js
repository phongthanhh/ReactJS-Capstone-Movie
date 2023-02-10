import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import AdminTemplate from './templates/AdminTemplates/AdminTemplate';
import { AdminHome } from './pages/admin/AdminHome';



export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate path='/admin' component={AdminHome} />
      </Switch>
    </Router>
  );
}

export default App;
