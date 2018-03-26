import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './components/home';
import Form from './components/greencomp';
import StudentProfile from './components/studentProfile';
import Page404 from './components/page404';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/profile/:student_id' component={StudentProfile} />
          <Route component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
