import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import TagManager from 'react-gtm-module';
import { APPLICATION } from './utils/constants';

TagManager.initialize(APPLICATION.gtagManagerArgs);

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>,
);
