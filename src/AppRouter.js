import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cadastro from './Cadastro';

function AppRouter() {
  return (
    <Router>
      <div>
        <Link to="/cadastro/" className="btn">Cadastre-se</Link>

        <Route path="/" exact component={Index} />
        <Route path="/cadastro/" component={Cadastro} />
      </div>
    </Router>
  );
}

export default AppRouter;