// import logo from './logo.svg';
import { BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import './App.css';
import TieuDe from './components/Header';
import Home from './pages/Home/Home';
import ThongTinChiTiet from './pages/ThongTinChiTiet/ThongTinChiTiet';
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './template/homeTemplate/HomeTemplate';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path='/home' component={Home}/>
        <HomeTemplate exact path='/home/film-detail/:id' component={ThongTinChiTiet}/>
        
        <HomeTemplate exact path="/" component={Home}/>
      </Switch>
     
      
    </Router>
   
  );
}

export default App;
