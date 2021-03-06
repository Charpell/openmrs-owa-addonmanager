/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App.jsx';

import ManageApps from './components/manageApps/ManageApps.jsx';
import ManageSettings from './components/manageApps/ManageSettings.jsx';
import Addon from './components/manageApps/Addon.jsx';
import Help from './components/manageApps/Help.jsx';


export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={ManageApps} />
        <Route path="manageSettings" component={ManageSettings} />
        <Route path="help" component={Help} />
        <Route path="addon/:addonName" component={Addon} />
        <Route path="*" component={ManageApps} />
      </Route>
    </Router>
  );
};
