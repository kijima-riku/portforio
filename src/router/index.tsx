import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../home/components/app"
import App1 from '../calculate/components1/App1';
import App2 from '../photo_library/components2/App2';
import Top from '../home/components/Top';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/calculate" component={App1} />
        <Route path="/photo_library" component={App2} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Top} />
      </Switch>
    </Router>
  );
};

export default App;
