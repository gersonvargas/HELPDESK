// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Componentes/App';
import Form from './Componentes/Forms';
import Organizacion from './Componentes/Organizacion';
import Alcaldia from './Componentes/Alcaldia';
import Concejo from './Componentes/Concejo';
import Home from './Componentes/Inicio';
// import Search from './Componentes/Search_Job';
import Register from './Componentes/Register';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/forms" component={Form} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/organizacion" component={Organizacion} />
      <Route exact path="/alcaldia" component={Alcaldia} />
      <Route exact path="/concejo" component={Concejo} />
    </Switch>
  </App>;

export default AppRoutes;
