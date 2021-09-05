import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CheckInPage from './pages/CheckInPage';
import EndPage from './pages/EndPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckInLog from './checkin-admin/views/CheckInLog';
import CheckInSetting from './checkin-admin/views/CheckInSetting';
import './App.css';

function App() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <>
      <BrowserRouter>
        <div id='page-wrapper'>
          <Switch>
            <Route path='/' exact={true} component={LandingPage} />
            <Route path='/checkin' exact component={CheckInPage} />
            <Route path='/end' exact component={EndPage} />
            <Route path='/admin/log' exact component={CheckInLog} />
            <Route path='/admin/setting' exact component={CheckInSetting} />
            <Redirect from='/submit' to='/checkin' />
            <Redirect from='/admin' to='/admin/log' />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
      <footer id='version'>v{process.env.REACT_APP_VERSION}</footer>
    </>
  );
}

export default App;
