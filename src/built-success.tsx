import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import {SuccessPage} from "./success";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: SuccessPage,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
