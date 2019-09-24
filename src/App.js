import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
