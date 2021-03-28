import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
import MenuContextProvider from "../../context/MenuContext";

const one = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./entryOne")
);

const two = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./entryTwo")
);

const three = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./entryThree")
);

const AdminView = ({ match, ...props }) => {
  return (
    <MenuContextProvider>
      <AppLayout user={1}>
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/aentryOne`}
              />
              <Route path={`${match.url}/aentryOne`} component={one} />
              <Route path={`${match.url}/aentryTwo`} component={two} />
              <Route path={`${match.url}/aentryThree`} component={three} />
              <Redirect to="/error" />
            </Switch>
          </Router>
        </Suspense>
      </AppLayout>
    </MenuContextProvider>
  );
};

export default withRouter(AdminView);
