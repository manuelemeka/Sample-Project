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

const AppView = ({ match, ...props }) => {
  return (
    <MenuContextProvider>
      <AppLayout user={2}>
        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/entryOne`}
              />
              <Route path={`${match.url}/entryOne`} component={one} />
              <Route path={`${match.url}/entryTwo`} component={two} />
              <Route path={`${match.url}/entryThree`} component={three} />
              {/* <Route path={adminRoot} component={ViewAdmin} /> */}
              <Redirect to="/error" />
            </Switch>
          </Router>
        </Suspense>
      </AppLayout>
    </MenuContextProvider>
  );
};

export default withRouter(AppView);
