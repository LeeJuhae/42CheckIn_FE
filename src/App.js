import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CheckInPage from './pages/CheckInPage';
import EndPage from './pages/EndPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div id='page-wrapper'>
        <Switch>
          <Route path='/' exact={true} component={LandingPage} />
          <Route path='/checkin' component={CheckInPage} />
          <Route path='/end' component={EndPage} />
          <Route path='/admin' component={AdminPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <div id='version'>v1.0.0</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
