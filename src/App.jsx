import logo from './logo.svg';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/onboard/login';
import SignUpPage from './pages/onboard/signUp';
import ErrorBoundry from './pages/errorPage';
import Dashboard from './pages/dashboard/dashboard';
import ProtectedRoutes from './pages/protected/ProtectedRoutes';


function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<ProtectedRoutes/>}>
            <Route element = {<Dashboard/>} path='/'/>
            <Route element = {<Dashboard/>} path='/dashboard'/>
        </Route>
        <Route element = {<LoginPage/>} path='/login' />
        <Route element = {<SignUpPage/>} path='/sign-up'/>
        <Route errorElement ={<ErrorBoundry/>} path='/*'/>
      </Routes>
    </Router>
    // <div className='App'>
    //   <Routes />
    // </div>
  );
}

export default App;
