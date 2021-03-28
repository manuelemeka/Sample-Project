import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { adminRoot } from "./constants/menuConstant";

const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./pages/app")
);

const ViewAdmin = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./pages/admin")
);

function App() {
  return (
    <div>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Redirect exact from={`/`} to={adminRoot} />
            <Route path={"/app"} render={(props) => <ViewApp {...props} />} />
            <Route
              path={adminRoot}
              render={(props) => <ViewAdmin {...props} />}
            />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
